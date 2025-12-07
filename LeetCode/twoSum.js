var twoSum = function(nums, target) {
    
    // create an empty hashmap
    const map = {};
    
    //loop through nums array
    for (let i = 0; i < nums.length; i++){
        
        //we take the target (10) and subtract it from the current array int
        const complement = target - nums[i];
        
        //check if the complement is in the map
        if (map.hasOwnProperty(complement)){
            return [map[complement], i]
        }
        

        //if it's not in the map, add int and index to the map.
        map[nums[i]] = i;
    }
    
};


//nums = [3, 5, 2, 8], target = 10