function moveZeros(arr) {
  const nonZeros = arr.filter((x) => x !== 0);
  const zeroCount = arr.length - nonZeros.length;
  return [...nonZeros, ...Array(zeroCount).fill(0)];
}

moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]);
