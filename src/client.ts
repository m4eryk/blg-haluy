import { GoogleGenAI } from '@google/genai';

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  throw new Error(
    'Задайте GEMINI_API_KEY в .env (скопируйте .env.example). Ключ: https://aistudio.google.com/apikey',
  );
}

export const ai = new GoogleGenAI({ apiKey });
export const model = process.env.GEMINI_MODEL || 'gemini-flash-latest';
