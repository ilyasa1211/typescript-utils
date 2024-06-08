// Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233
export default function getFibonacciNumber(n: number): number {
  if (n < 2) {
    return n;
  }

  return getFibonacciNumber(n - 1) + getFibonacciNumber(n - 2);
}
