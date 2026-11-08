export const pendingText = 'Ответствую 🧐';
export const highDemandText = 'Модель занята, повторите чуть позже.';
export const failedText = 'Не получилось ответить.';

const telegramTextLimit = 4096;

export const fitTelegramText = (text: string): string => (
  text.length > telegramTextLimit ? text.slice(0, telegramTextLimit) : text
);
