/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let longestSize = 0;
    let currentSize = 0;
    let map = new Map();
    for (let i =0; i< s.length; i++ ) {
        if(map.has(s[i])) {
            i -= currentSize - 1;
            map = new Map();
            map.set(s[i], null)
            currentSize = 1;
        }
        else {
            map.set(s[i], null)
            currentSize += 1;
            if (longestSize < currentSize) {
                longestSize = currentSize;
            }
        }
    }
    return longestSize;
};