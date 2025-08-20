function digitize(n) {
  const digToArray = n.toString().split('').map(Number);
  return digToArray.reverse();
}