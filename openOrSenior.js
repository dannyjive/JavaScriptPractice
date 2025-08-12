function openOrSenior(data) {
  const status = [];

  for (let elem of data) {
    if (elem[0] >= 55 && elem[1] > 7) {
      status.push("Senior");
    } else {
      status.push("Open");
    }
  }

  return status;
}

// Simpler Way
// function openOrSenior(data){
//   return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
// }

openOrSenior([
  [45, 12],
  [55, 21],
  [19, -2],
  [104, 20],
]);
