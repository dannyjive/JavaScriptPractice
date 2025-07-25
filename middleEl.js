function gimme (triplet) {
const sortedTrip = [...triplet].sort((a, b) => a - b);
const indexOfMidTrip = sortedTrip[1];
  
return triplet.indexOf(indexOfMidTrip)
}

// ALT:
// const gimme = function (arr){
//     return arr.indexOf([...arr].sort((a, b) => a - b)[1]);
// };