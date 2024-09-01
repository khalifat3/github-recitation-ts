// Endpoint for querying the Fibonacci numbers

const fibonacci = require("./fib"); // Assuming you are using CommonJS modules

const fibRoute = (req, res) => {
  const { num } = req.params;
  const number = parseInt(num, 10);

  if (isNaN(number)) {
    res.status(400).send('Invalid input'); // Handle non-numeric input
    return;
  }

  // Calculate Fibonacci number
  const fibN = fibonacci(number);

  // Construct response based on the result
  let result;
  if (number < 0) {
    result = `Fibonacci(${number}) is undefined`; // Handle negative numbers
  } else {
    result = `Fibonacci(${number}) is ${fibN}`; // Handle valid numbers
  }

  res.send(result);
};

module.exports = fibRoute; // Export the route
