var findMaxAverage = function (nums, k) {
  let maxAverage = -Infinity;
  let left = 0;
  let sum = 0;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];

    //If Right = k position over from left, move left pointer right.
    if (right - left + 1 > k) {
      sum -= nums[left];
      left++;
    }

    if (right - left + 1 === k) {
      let average = sum / k;
      maxAverage = Math.max(maxAverage, average);
    }
  }
  return maxAverage;
};
