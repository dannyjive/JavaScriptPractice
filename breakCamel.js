function solution(string) {
  return string.replace(/([A-Z])/g, ' $1');
}

// function solution(string) {
//     const strArray = []

//   if (string.length < 1){
//     return ""; 
//   }

//   for (const char of string){
//     if (/[A-Z]/.test(char)){
//         strArray.push(' ');
//     }
//     strArray.push(char)
//   }

//   return(strArray.join(''))
// }

// solution('test')