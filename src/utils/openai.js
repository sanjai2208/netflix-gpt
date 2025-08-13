import OpenAI from 'openai';
const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.REACT_APP_DEEP_KEY,
  dangerouslyAllowBrowser:true
});
export default openai