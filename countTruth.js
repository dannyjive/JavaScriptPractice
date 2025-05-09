
function countTruthy(array){

    let count = 0;

    for (let i of array){
        if (i){
            count++;
        }
    }
    console.log(`Total of truth values is: ${count}`);
}

let arr = [0, null, undefined, '', 1, 2, 3]

countTruthy(arr);