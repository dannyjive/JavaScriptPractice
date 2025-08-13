function basicOp(operation, value1, value2) {
  const ops = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b
  };
  return ops[operation](value1, value2);
}

basicOp("+", 4, 7)