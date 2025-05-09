const numbers = [1, 2, 3, 4];

let collection = includes(numbers, 3)
console.log(collection);

function includes(array, searchElement){
    return array.find((el) => el === searchElement) !== undefined;
}