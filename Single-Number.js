/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    
    let number=nums[0];
    for(let i=1; i<nums.length; i++){
        number ^=nums[i];
        
    }
    return number;
};
