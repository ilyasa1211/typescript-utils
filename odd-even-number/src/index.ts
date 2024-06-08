import getRandomInt from "random-integer";

export function isOddNumber(number: number): boolean {
  return number % 2 != 0;
}

export function isEvenNumber(number: number): boolean {
  return number % 2 == 0;
}

export function getRandomOddNumber(
  min: number = Number.MIN_SAFE_INTEGER,
  max: number = Number.MAX_SAFE_INTEGER
): number {
  const result = getRandomInt(min, max);
  return isOddNumber(result) ? result : getRandomOddNumber(min, max);
}

export function getRandomEvenNumber(
  min: number = Number.MIN_SAFE_INTEGER,
  max: number = Number.MAX_SAFE_INTEGER
): number {
  const result = getRandomInt(min, max);
  return isEvenNumber(result) ? result : getRandomEvenNumber(min, max);
}

