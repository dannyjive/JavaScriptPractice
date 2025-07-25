function order(words){
    return words
    .split(' ')
    .sort((a, b) => {
        const numA = parseInt(a.match(/\d/));
        const numB = parseInt(b.match(/\d/));
        return numA - numB
    })
    .join(' ');
}