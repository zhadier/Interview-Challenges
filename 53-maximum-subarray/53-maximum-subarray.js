/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let continuous;
    let sum = nums[0];
    let currentSum = 0;
    for(let i=0 ; i < nums.length; i++) {
      currentSum+=nums[i];
        if(currentSum < 0) {
            currentSum = 0;
        }
        sum = Math.max(currentSum, sum);
    }
    if (sum == 0) {
        return Math.max(...nums);
    }
    return sum;
};