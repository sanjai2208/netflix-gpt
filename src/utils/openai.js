import OpenAI from 'openai';
const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: "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",
  dangerouslyAllowBrowser:true
});
export default openai