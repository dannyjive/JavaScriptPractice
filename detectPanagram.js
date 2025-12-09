function isPangram(str) {
  const seen = new Set();

  for (const ch of str.toLowerCase()) {
    if (ch >= 'a' && ch <= 'z') {
      seen.add(ch);
      if (seen.size === 26) return true; // early exit
    }
  }

  return false;
}


// function isPangram(string){
//   //remove white spaces and underscores and make lowercase
//   const regex = /[^a-zA-Z0-9]/g; 
//   const filteredString = string.replace(regex, '').toLowerCase();
  
//   //get rid of duplicates by putting in a Set
//   const stringToSet = new Set(filteredString)
  
//   //spread Set and convert to array.
//   const setToString = [...stringToSet]

//   //check length of array
//   if (setToString.length === 26) {
//     return true;
//   } else {
//     return false;
//   }
// }