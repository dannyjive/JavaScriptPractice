// function isIsogram(str){
//     const lowercase = str.toLowerCase();
//     return new Set(lowercase).size === lowercase.length;
// }

function isIsogram(str) {
    const seen = {};
    for (let char of str.toLowerCase()) {
        if (seen[char]) return false;
        seen[char] = true;
    }
    return true;
}