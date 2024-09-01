// Util function that computes Fibonacci numbers with memoization
const memo = {};

function fibonacci(n) {
  if (n < 0) {
    return undefined;  // Use actual `undefined` instead of a string
  } else if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }

  // Check if the result is already in the memo object
  if (memo[n] !== undefined) {
    return memo[n];
  }

  // Compute the result and store it in the memo object
  memo[n] = fibonacci(n - 1) + fibonacci(n - 2);
  return memo[n];
}

module.exports = fibonacci;
