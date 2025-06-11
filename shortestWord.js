function findShort(s){
  let stringToArray = s.split(" ");
  
  let shortestWord = stringToArray.reduce((acc, curr) => curr.length < acc.length ? curr : acc)
       return shortestWord.length;                                 
}