import { GoogleGenAI } from '@google/genai';

export const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export const model = process.env.GEMINI_MODEL || 'gemini-flash-latest';
