function squareDigits(num) {
  let digits = num.toString().split("");
  let result = [];

  for (let i = 0; i < digits.length; i++) {
    result.push(Number(digits[i]) ** 2);
  }

  return Number(result.join(""));
}
