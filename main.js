let twoSum = function(nums, target){
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] == target){
                return console.log([i, j]);
            }
        }
    }
}

twoSum([2, 7, 11, 15], 9)