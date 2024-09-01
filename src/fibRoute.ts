// Endpoint for querying the Fibonacci numbers

const fibonacci = require("./fib");

const fibRoute = (req, res) => {
  const { num } = req.params;
  const number = parseInt(num, 10);

  if (isNaN(number)) {
    res.status(400).send('Invalid input'); // Handle non-numeric input
    return;
  }

  const fibN = fibonacci(number);
  let result;

  if (fibN === "undefined") {
    result = `fibonacci(${number}) is undefined`; // Handle negative numbers
  } else {
    result = `fibonacci(${number}) is ${fibN}`; // Handle valid numbers
  }

  res.send(result);
};

module.exports = fibRoute;
