export function isOddNumber(number) {
    return number % 2 != 0;
}
export function isEvenNumber(number) {
    return number % 2 == 0;
}
export function getRandomOddNumber(min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) {
    const result = randomInt(min, max);
    return isOddNumber(result) ? result : getRandomOddNumber(min, max);
}
export function getRandomEvenNumber(min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) {
    const result = randomInt(min, max);
    return isEvenNumber(result) ? result : getRandomEvenNumber(min, max);
}
// TODO: remove this unrelevant
function randomInt(min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) {
    return Math.floor(Math.random() * (max - min) + min);
}
