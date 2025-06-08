function moveZeros(arr) {
  const nonZeros = [];
  let zeroCount = 0;

  for (item of arr) {
    if (item === 0) {
      zeroCount++;
    } else {
      nonZeros.push(item);
    }
  }

  return [...nonZeros, ...Array(zeroCount).fill(0)];
}

moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]);
