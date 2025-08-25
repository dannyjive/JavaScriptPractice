function addLength(str) {
  //SHORT WAY
  return str.split(" ").map((s) => `${s} ${s.length}`);

  //LONG WAY
  //   const splitArray = str.split(' ')
  //   const newArray = [];

  //   for (let word of splitArray){
  //     newArray.push(`${word} ${word.length}`)
  //   }

  //   return newArray;
}

addLength("apple ban");
