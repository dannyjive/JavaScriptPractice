function sumMix(x){
    const numArray = x.map(Number);
    return numArray.reduce((summ, curr) => summ + curr);
}