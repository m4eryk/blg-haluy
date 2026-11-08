import { ai, model } from 'src/agent/index';
import { toMessage } from 'src/agent/message';

export const reply = async (text: string): Promise<string> => {
  const response = await ai.models.generateContent({
    model,
    contents: text,
    config: {
      tools: [
        { urlContext: {} },
      ],
    },
  });

  return toMessage(response.text ?? '');
};
