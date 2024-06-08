export function isLeapYear(year: string | number): boolean {
    return Number(year) % 4 === 0;
}