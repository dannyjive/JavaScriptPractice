function persistence(num) {

let count = 0;

while (num >= 10){
    num = num
        .toString()
        .split('')
        .map(Number)
        .reduce((acc, curr) => acc * curr);
    count++
}

return count;


}

persistence(999)