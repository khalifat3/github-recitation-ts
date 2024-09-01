// Util function that computes Fibonacci numbers with memoization
const memo = {};

function fibonacci(n) {
  if (n < 0) {
    return "undefined";  // Use string "undefined" to match test case expectations
  } else if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }

  if (memo[n]) {
    return memo[n];
  }

  memo[n] = fibonacci(n - 1) + fibonacci(n - 2);
  return memo[n];
}

