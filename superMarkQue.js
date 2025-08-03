function queueTime(customers, n) {
  if (customers.length === 0) return 0;
  if (n === 1) return customers.reduce((a, b) => a + b, 0);

  // Initialize an array representing each till's current load
  const tills = Array(n).fill(0);

  for (let time of customers) {
    // Assign customer to the till that becomes available the earliest
    const idx = tills.indexOf(Math.min(...tills));
    tills[idx] += time;
  }

  // The total time is the time when the last till finishes
  return Math.max(...tills);
}

console.log(queueTime([5, 3, 4], 1)); // ➜ 12
console.log(queueTime([10, 2, 3, 3], 2)); // ➜ 10
console.log(queueTime([2, 3, 10], 2)); // ➜ 12