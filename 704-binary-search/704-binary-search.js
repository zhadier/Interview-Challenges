/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
    let count = 0;
var search = function(nums, target) {
    if(nums.length === 1) {
        if(nums[0]===target) {
        return 0;
        }
        else {
         return -1;
        }
    }
   return find(0, nums.length -1, nums, target)
};
    
var find = (start, end, nums, target) => {
        let midpoint;
        if((end-start) <= 1) {
            if(nums[start]===target) {
                return start;
            }
            else if (nums[end]=== target) {
                return end;
            }
            return -1;
        }
        if((end-start) % 2) {
            midpoint = ((start+end) +1) / 2
        }
        else {
            midpoint = (start+end) / 2
        }
        if(nums[midpoint] === target) {
            return midpoint;
        }
        else if (nums[midpoint] > target) {
            return find(start, midpoint-1, nums, target);
        }
        else {
            count ++;
             return find(midpoint+1, end, nums, target);
        }
    }