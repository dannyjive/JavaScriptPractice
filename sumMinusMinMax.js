function sumArray(array){
  if(!Array.isArray(array) || array.length <= 2) return 0;
  
  const sum = array.reduce((acc, curr) => acc + curr, 0);
  const min = Math.min(...array);
  const max = Math.max(...array);
  
  return sum - min - max;
}