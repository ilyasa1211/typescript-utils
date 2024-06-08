import isNumber from "is-number";

export default function extractNumber(text: string): number {
  const result: string[] = [];
  for (let i = 0; i < text.length; i++) {
    const candidate = text[i];
    if (isNumber(candidate)) {
      result.push(candidate);
    }
  }
  return Number(result.join(""));
}