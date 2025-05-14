const numbers = [1, 2, 3, 4, 5, 6];

const max = getMax(numbers)

console.log(max);

function getMax(array){
    return array.reduce((acc, curr) => curr > acc ? acc = curr : acc )
}