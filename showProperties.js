const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
};

function showProperties(obj){
    for (let value in obj){
        console.log(`${value}: ${obj[value]}`);
    }
}

showProperties(movie);