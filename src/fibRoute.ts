// src/fibRoute.ts
import { Request, Response } from 'express';
import { fibonacci } from './fib';  // Import the fibonacci function

const fibRoute = (req: Request, res: Response) => {
  const { num } = req.params;
  const number = parseInt(num, 10);

  if (isNaN(number)) {
    res.status(400).send('Invalid input');
    return;
  }

  const fibN = fibonacci(number);
  let result: string;

  if (fibN === "undefined") {
    result = `fibonacci(${number}) is undefined`;
  } else {
    result = `fibonacci(${number}) is ${fibN}`;
  }

  res.send(result);
};

export default fibRoute;
