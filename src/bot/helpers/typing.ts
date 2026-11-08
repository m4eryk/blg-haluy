import type { Context } from 'grammy';

const typingIntervalMs = 4000;

export const keepTyping = (ctx: Context): (() => void) => {
  const showTyping = (): void => {
    ctx.replyWithChatAction('typing').catch(() => undefined);
  };

  showTyping();

  const typing = setInterval(showTyping, typingIntervalMs);

  return (): void => {
    clearInterval(typing);
  };
};
