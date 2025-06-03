function spinWords(string) {
  let strToArray = string.split(" ");
  let newArray;
  for (word of strToArray) {
    word.length < 5
      ? newArray.push(word)
      : newArray.push(word.split("").reverse().join(""));
  }
  return(newArray.join(" "));
}

spinWords("Welcome");
