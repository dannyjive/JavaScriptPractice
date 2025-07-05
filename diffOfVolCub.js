function findDifference(a, b) {

    const volumeA = a.reduce((acc, curr) => acc * curr)
    const volumeB = b.reduce((acc, curr) => acc * curr)
    return Math.abs(volumeA - volumeB);
}

findDifference([3, 2, 5], [1, 4, 4])