function DNAtoRNA(dna) {
  const dnaString = []
  for (let char of dna){
    if (char === 'T'){
      dnaString.push('U');
    } else{
      
    dnaString.push(char);
    }
  }
  return dnaString.join('')
}