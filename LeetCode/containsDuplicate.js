// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]

// Output: true

// Explanation:
// The element 1 occurs at the indices 0 and 3.

// O(n) time and space

var containsDuplicate = function(nums) {
    let map = {};

    for (let i = 0; i < nums.length; i++){
        let num = nums[i] //capture the number in the array

        if (map.hasOwnProperty(num)){ //if mapped number is in map, then return true.
            return true
        }

        map[num] = true //place the captured number into a map and set it to true.
    }
    return false;
};