function addLength(str) {
  const splitArray = str.split(' ')
  const newArray = [];
  
  for (let word of splitArray){
    newArray.push(`${word} ${word.length}`)
  }
  
  return newArray;
}

addLength('apple ban')