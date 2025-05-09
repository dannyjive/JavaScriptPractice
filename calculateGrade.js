const marks = [80, 80, 50]


function calculateGrade(marks){

    let arrLength = marks.length;
    let sum = 0;

    for (let item of marks){
        sum += item;
    }

    let average = sum / arrLength;

    if (average >= 0 && average <= 59){
        console.log('F');
    }
    if (average >= 60 && average <= 69){
        console.log('D');
    }
    if (average >= 70 && average <= 79){
        console.log('C');
    }
    if (average >= 80 && average <= 89){
        console.log('D');
    }
    if (average >= 90 && average <= 100){
        console.log('A');
    }
    

}

calculateGrade(marks)
