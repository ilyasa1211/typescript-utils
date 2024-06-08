export default function isNumber(text: string): boolean {
    return !Number.isNaN(Number(text));
}