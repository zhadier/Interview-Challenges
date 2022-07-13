/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let longestSize = 0;
    let currentSize = 0;
    let arr = [];
    let stringArray = s.split('');
    for (let i =0; i< stringArray.length; i++ ) {
        if(arr.includes(stringArray[i])) {
            i -= currentSize - 1;
            arr = [stringArray[i]];
            currentSize = 1;
        }
        else {
            arr.push(stringArray[i]);
            currentSize += 1;
            if (longestSize < currentSize) {
                longestSize = currentSize;
            }
        }
    }
    return longestSize;
};