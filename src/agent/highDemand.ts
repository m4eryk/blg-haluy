import { ApiError } from '@google/genai';

export const isHighDemand = (error: unknown): boolean => {
  if (!(error instanceof ApiError)) {
    return false;
  }

  return error.status === 503 && error.message.toLowerCase().includes('high demand');
};
