/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const sorted = nums.sort((a,b)=> a-b);
    const triplets = [];
    for(let i=0; i<sorted.length; i++) {
        let j = i+1;
        let k = sorted.length -1; 
        while(j<k) {
            let sum = sorted[i]+sorted[j]+sorted[k];
            if(sum <= 0) {
                if(sum ===0) {
                triplets.push([sorted[i], sorted[j], sorted[k]]);
                    }
            while(sorted[j]===sorted[j+1]) {
                  j++;
                }
                j++;
            }
            else if (sum > 0) {
            while(sorted[k]===sorted[k-1]) {
                  k--;
            }
                  k--;
            }
        }
        while(sorted[i]===sorted[i+1]) {
                  i++;
                }
    }
    return triplets;
};