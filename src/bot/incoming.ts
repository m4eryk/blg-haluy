import type { Message } from 'grammy/types';

export type IncomingRequest = {
  text: string;
};

export const toIncomingRequest = (message: Message): IncomingRequest | undefined => {
  const text = message.text?.trim();

  if (!text) {
    return undefined;
  }

  return { text };
};
