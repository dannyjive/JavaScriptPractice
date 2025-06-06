function longest(s1, s2){
    const combinedLetters = s1 + s2;
    const uniqueSorted = [...new Set(combinedLetters)].sort().join('');
    return uniqueSorted;
}
longest('lkasjdfljasdfkjl', 'uiouioiemmbmbmcvsdldpoq')

