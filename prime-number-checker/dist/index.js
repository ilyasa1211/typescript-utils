export default function isPrimeNumber(number) {
    if (number <= 1) {
        return false;
    }
    const maxIndex = Math.floor(number / 2);
    for (let index = 2; index < maxIndex; index++) {
        if (number % index === 0) {
            return false;
        }
    }
    return true;
}
