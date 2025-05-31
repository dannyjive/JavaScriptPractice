function highAndLow(numbers){
  let nums = numbers.split(" ").sort((a, b) => a - b)
  let numFirst = nums[0] 
  let numLast = nums[(nums.length - 1)]
  return `${numLast} ${numFirst}`
}