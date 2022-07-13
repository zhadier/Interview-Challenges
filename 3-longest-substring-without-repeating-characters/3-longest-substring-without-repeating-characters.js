/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let longestSize = 0;
    let currentSize = 0;
    let arr = [];
    for (let i =0; i< s.length; i++ ) {
        if(arr.includes(s[i])) {
            i -= currentSize - 1;
            arr = [s[i]];
            currentSize = 1;
        }
        else {
            arr.push(s[i]);
            currentSize += 1;
            if (longestSize < currentSize) {
                longestSize = currentSize;
            }
        }
    }
    return longestSize;
};