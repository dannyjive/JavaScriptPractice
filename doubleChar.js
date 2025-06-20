function doubleChar(str) {
  return str.split('').reduce((acc, curr) => acc + curr + curr, '' )
}