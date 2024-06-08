"use strict";
class AlphabetNumberConverter {
    static toNumber(characters) {
        let numberResult = 0;
        for (let index = 1; index <= characters.length; index++) {
            const character = characters[characters.length - index];
            const number = (this.alphabets.indexOf(character) + this.alphabetIndexOffset) *
                this.alphabets.length ** (index - 1);
            numberResult += number;
        }
        return numberResult;
    }
    static toAlphabet(numbers) {
        const rawResult = [];
        while (numbers > this.alphabets.length) {
            const result = numbers % this.alphabets.length;
            numbers = Math.floor(numbers / this.alphabets.length);
            rawResult.unshift(result);
        }
        rawResult.unshift(numbers % this.alphabets.length);
        const result = rawResult.map((alphabetIndex) => {
            return this.alphabets[alphabetIndex - this.alphabetIndexOffset];
        });
        return result.join("");
    }
}
AlphabetNumberConverter.alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
AlphabetNumberConverter.alphabetIndexOffset = 1;
