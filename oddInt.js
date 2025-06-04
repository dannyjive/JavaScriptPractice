function findOdd(A) {
  const count = A.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});

  for (let key in count) {
    if (count[key] % 2 !== 0) {
      return Number(key);
    }
  }
}

findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]);
