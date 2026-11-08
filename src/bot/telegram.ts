import { Bot } from 'grammy';

import { startCommand } from 'src/bot/command';
import { onMessage } from 'src/bot/events';

const bot = new Bot(process.env.TELEGRAM_BOT_TOKEN!);

bot.command('start', startCommand);

bot.on('message', onMessage);

export default bot;
