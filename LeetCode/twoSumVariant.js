// Given an unsorted array of integers nums and a target, return true if there exist any two numbers that add up to the target.

// Differences from the original Two Sum:
// You don’t need the indices, just true or false
// The array is still unsorted
// Only one pair is needed

// Example:

// nums = [4, 1, 9, 7], target = 10
// Output: true   (because 1 + 9 = 10)

// nums = [2, 5, 8], target = 20
// Output: false

var hasPairWithTarget = function (nums, target) {
  //set up empty map
  map = {};

  //loop through array
  for (let i = 0; i < nums.length; i++) {
    //subtract target from num in array and put it in compliment
    let compliment = target - nums[i];

    //check if map has the num already
    if (map.hasOwnProperty(compliment)) {
      return true;
    }

    //if map doesn't have the num, then add it
    map[nums[i]] = true;
  }

  //if it doesn't find anything return false
  return false;
};
