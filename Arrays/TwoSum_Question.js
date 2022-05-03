/* 
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
*/ 

//Input: nums = [2,7,11,15], target = 9
//Output: [0,1]
//Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

//o(n^2) solution 
const TwoSum = (arr, target) => { 
    //check arr 
    if (arr.length === 0) { 
        return undefined; 
    } else { 
        for (let i = 0; i  < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) { 
                if (arr[i] + arr[j] === target) { 
                    return [i, j];
                } 
            } //for j end 

        } //for i end 

    } //else end 

    return undefined; 

} //end of twosum 

//o(n) solution 
const TwoSum2 = function(nums, target) {
    const comp = {};
    for(let i=0; i<nums.length; i++){
        if(comp[nums[i] ]>=0){
            return [ comp[nums[i] ] , i]
        }
        comp[target-nums[i]] = i
    }
};

const nums = [2,7,11,15]; 
const target = 9; 

console.log(TwoSum(nums, target)); 
console.log(TwoSum2(nums, target)); 

