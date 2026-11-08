import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import type { CommandContext, Context } from 'grammy';
import { InputFile } from 'grammy';

const startCaption = `
Холуй этого логова. Прислужник, не собеседник: пока не позовёте, молчу.

Позовёте — разберу, что написали, что на фото и куда ведёт ссылка. Если в логове ответа нет, схожу за ним наружу.
`;

const startImagePath = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '../../../assets/start.png',
);

export const startCommand = async (ctx: CommandContext<Context>): Promise<void> => {
  if (!existsSync(startImagePath)) {
    await ctx.reply(startCaption);
    return;
  }

  await ctx.replyWithPhoto(new InputFile(startImagePath), {
    caption: startCaption,
  });
};
