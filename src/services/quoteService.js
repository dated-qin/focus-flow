import { zhCN } from "../i18n/zh-CN";

export async function getQuote() {
  const quotes = zhCN.focus.quotes;
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}
