type TAlphabet =
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "F"
  | "G"
  | "H"
  | "I"
  | "J"
  | "K"
  | "L"
  | "M"
  | "N"
  | "O"
  | "P"
  | "Q"
  | "R"
  | "S"
  | "T"
  | "U"
  | "V"
  | "W"
  | "X"
  | "Y"
  | "Z";

class AlphabetNumberConverter {
  public static alphabets: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  private static alphabetIndexOffset = 1;

  public static toNumber(characters: string): number {
    let numberResult: number = 0;

    for (let index = 1; index <= characters.length; index++) {
      const character = characters[characters.length - index] as TAlphabet;

      const number =
        (this.alphabets.indexOf(character) + this.alphabetIndexOffset) *
        this.alphabets.length ** (index - 1);
      numberResult += number;
    }

    return numberResult;
  }

  public static toAlphabet(numbers: number): string {
    const alphabetIndexes: number[] = [];

    while (numbers > this.alphabets.length) {
      const result: number = numbers % this.alphabets.length;
      numbers = Math.floor(numbers / this.alphabets.length);
      alphabetIndexes.unshift(result);
    }
    alphabetIndexes.unshift(numbers);

    const alphabets: TAlphabet[] = alphabetIndexes.map((alphabetIndex: number) => {
      return this.alphabets[
        alphabetIndex - this.alphabetIndexOffset
      ] as TAlphabet;
    });

    return alphabets.join("");
  }
}
