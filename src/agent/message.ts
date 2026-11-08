const emptyAnswerText = 'Пустой ответ.';

export const toMessage = (text: string): string => text.trim() || emptyAnswerText;
