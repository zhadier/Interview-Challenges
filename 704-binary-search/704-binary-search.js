/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
    let count = 0;
var search = function(nums, target) {
     let pivot, left = 0, right = nums.length - 1;
     while (left <= right) {
       pivot = Math.floor((left + (right - left) / 2));
       console.log(pivot,left,right, nums[pivot])
       if (nums[pivot] === target) return pivot;
       if (target < nums[pivot]) right = pivot - 1;
       else left = pivot + 1;
    }
    return -1;
};
    