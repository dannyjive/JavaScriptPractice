function expressionsMatter(a, b, c) {
  return Math.max(
    a + b + c,
    a * b * c,
    (a + b) * c,
    a * (b + c),
    a + b * c,
    a * b + c
  );
}