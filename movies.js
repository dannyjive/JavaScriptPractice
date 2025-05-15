const movies = [
    { title: 'a', year: 2018, rating: 4.5 },
    { title: 'b', year: 2018, rating: 4.7 },
    { title: 'c', year: 2018, rating: 3 },
    { title: 'd', year: 2017, rating: 4.5 },
];


const filteredMovies = movies
    .filter((movie) => movie.rating >= 4 && movie.year === 2018)
    .sort((a, b) => b.rating - a.rating)
    .map(m => m.title)



console.log(filteredMovies);