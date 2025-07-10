function reverseWords(str) {
  const strToArray = str.split(' ');
  const reversed = strToArray.map(word => word.split('').reverse().join(''));
  return reversed.join(' ');
}
