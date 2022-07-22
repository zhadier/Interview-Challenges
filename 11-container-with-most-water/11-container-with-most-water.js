/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max =0;
    let i =0;
    let j = height.length -1;
    let volume;
    while (i < j) {
        let currentW = j - i;
        if(height[i] <= height[j]) {
            volume = height[i] * currentW;
            i++;
        }    
        else {
             volume = height[j] * currentW;
             j--;
        }
       
        if(volume > max) {
            max = volume;
         }
  }
    return max;
};