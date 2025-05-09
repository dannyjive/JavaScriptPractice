const numbers = arrayFromRange(1, 4);

console.log(numbers);

function arrayFromRange(min, max){
    let range = [];
    while (min <= max){
        range.push(min++)
    }
    return range
}