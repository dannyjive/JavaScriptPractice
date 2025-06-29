const reverseSeq = (n) => {
  const sequence = [];
  for (let i = 1; i <= n; i++) {
    sequence.push(i);
  }
  return sequence.reverse();
};

reverseSeq(5);
