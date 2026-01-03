import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const explainCode = async (code: string, language: string = 'auto'): Promise<string> => {
  try {
    const model = 'gemini-3-flash-preview';
    const prompt = `You are an expert senior developer. Explain the following ${language} code clearly and concisely. Identify any potential bugs or security risks if apparent.
    
    Code:
    \`\`\`
    ${code}
    \`\`\`
    `;

    const response = await ai.models.generateContent({
      model,
      contents: prompt,
    });

    return response.text || "No explanation generated.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to explain code. Please check your API key and try again.");
  }
};

export const generateRegex = async (description: string): Promise<{ regex: string; explanation: string }> => {
  try {
    const model = 'gemini-3-flash-preview';
    const prompt = `Generate a Regular Expression (Regex) for the following requirement: "${description}".
    Return the result as a JSON object with two keys: "regex" (the pattern string) and "explanation" (a brief explanation of how it works).`;

    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        responseMimeType: "application/json"
      }
    });

    const text = response.text;
    if (!text) throw new Error("Empty response");
    
    return JSON.parse(text);
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to generate regex.");
  }
};