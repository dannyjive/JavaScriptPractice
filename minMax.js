function minMax(arr) {
  const list = arr.slice().sort((a, b) => a - b);
  return [list[0], list[list.length - 1]];
}
