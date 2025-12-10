// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

// Example 1:

// Input: nums = [1,2,3,1], k = 3
// Output: true

// Example 2:

// Input: nums = [1,0,1,1], k = 1
// Output: true

// Example 3:

// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false

// Constraints:

//     1 <= nums.length <= 105
//     -109 <= nums[i] <= 109
//     0 <= k <= 105

var containsNearbyDuplicate = function (nums, k) {
  //compare elements in the array and if they are the same character with different indicies && their indicies, subtracted from each other is less that k.
 

//BRUTE FORCE SOLUTION O(n^2)

    for (let i = 0; i < nums.length; i++){

        for (let j = i + 1; j < nums.length; j++){
            if (nums[i] === nums[j] && Math.abs((i - j) <= k)){
                return true;
            }
        }

    }
    return false;
};


//HASHMAP SOLUTION O(n)

 // [1,2,3,1]
 //  L
 //  R

 // map= {1:0, 2:1, 3:2, 1:4}

var containsNearbyDuplicateHashVer = function (nums, k) {
    const map = {};

    for (let i = 0; i < nums.length; i++){
        let num = nums[i]

        if (map[num] !== undefined && Math.abs((i - map[num]) <= k)){
            return true;
        }
        map[num] = i;
    }
    return false;

}


