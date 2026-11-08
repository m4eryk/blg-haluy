import type { Context, Filter } from 'grammy';

import { isHighDemand } from 'src/agent/highDemand';
import { reply } from 'src/agent/reply';
import {
  failedText,
  fitTelegramText,
  highDemandText,
  pendingText,
} from 'src/bot/helpers/text';
import { keepTyping } from 'src/bot/helpers/typing';
import { toIncomingRequest } from 'src/bot/incoming';

type MessageContext = Filter<Context, 'message'>;

export const onMessage = async (ctx: MessageContext): Promise<void> => {
  const request = toIncomingRequest(ctx.message);

  if (!request) {
    return;
  }

  const pending = await ctx.reply(pendingText);
  const stopTyping = keepTyping(ctx);

  try {
    const text = await reply(request.text);

    await ctx.api.editMessageText(
      pending.chat.id,
      pending.message_id,
      fitTelegramText(text),
    );
  } catch (error) {
    const text = isHighDemand(error) ? highDemandText : failedText;

    await ctx.api.editMessageText(pending.chat.id, pending.message_id, text);
  } finally {
    stopTyping();
  }
};
