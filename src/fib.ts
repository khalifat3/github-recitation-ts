// src/fib.ts
const memo: Record<number, number> = {};

export function fibonacci(n: number): number | "undefined" {
  if (n < 0) {
    return "undefined";  // Use string "undefined" for negative numbers
  } else if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }

  if (memo[n]) {
    return memo[n];
  }

  memo[n] = fibonacci(n - 1) as number + fibonacci(n - 2) as number;
  return memo[n];
}
