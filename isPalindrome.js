function isPalindrome(x) {
  const cleaned = x.toLowerCase();
  const reversed = cleaned.split('').reverse().join('');
  return cleaned === reversed;
}