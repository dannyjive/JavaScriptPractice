function stray(numbers) {
  const majority =
    numbers[0] === numbers[1] || numbers[0] === numbers[2]
      ? numbers[0]
      : numbers[1];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] !== majority) {
      return numbers[i];
    }
  }
}













stray([1, 2, 1])
