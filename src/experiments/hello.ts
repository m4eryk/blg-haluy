import { ai, model } from 'src/client';

const response = await ai.models.generateContent({
  model,
  contents: 'Say hello in one short sentence.',
});

console.log(response.text);
