//Two disticnt indicies with two equal values: nums[i] === nums[j]
//no greater than k: i - j <= k
//return true


// [1, 2, 3, 1, 5, 7, 1], window k = 3
//  i^
//  j^


// Brute Force method O(n2)

// var containsNearbyDuplicate = function(nums, k) {

//     for (let i = 0; i < nums.length - k; i++){
//         for (let j = i + 1; nums.length && j - i <= k; j++){
//             if(nums[i] === nums[j])
//                 return true
//         }
//     }

//     return false;

// }

//Hashmap version O(n)

//Two distinct indicies with two equal values: nums[i] === nums[j]
//no greater than k: i - j <= k
//return true


// [1, 2, 3, 1, 5, 7, 1], window k = 3
//     ^right
//  ^left

var containsNearbyDuplicate = function(nums, k) {

    let map = {};

    for (let i = 0; i < nums.length; i ++){//start the loop
        let num = nums[i]//Capture the number in the array using the loop's i

        if (map[num] !== undefined && i - map[num] <= k ){ //CHECK: if mapped number is in map AND current index minus previous index is less than k...
            return true;//return true
        }

        map[num] = i //map/num is the key. 'i' will be the distance which we'll use to measure in our check above.
       
    }

    return false;
}