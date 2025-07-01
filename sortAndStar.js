function twoSort(s) {
  const sortedArr = s.sort();
  const firstWord = sortedArr[0];
  const newElem = firstWord.split("").join("***");
  return newElem;
}

twoSort([
  "bitcoin",
  "take",
  "over",
  "the",
  "world",
  "maybe",
  "who",
  "knows",
  "perhaps",
]);
