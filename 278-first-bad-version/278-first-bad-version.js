/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let max = n;
        let min = 0;
        let currentCheck = Math.round((max - min + 1) / 2);
        while(true) {
        console.log(currentCheck)
        if(isBadVersion(currentCheck)) {
            if(isBadVersion(currentCheck-1) === false) {
                return currentCheck;
            }
            max = currentCheck;
            currentCheck = Math.round(currentCheck / 2);
        }
            else {
            if(isBadVersion(currentCheck+1) === true) {
                return currentCheck+1;
            }
            min = currentCheck
            currentCheck = currentCheck + Math.round((max - min + 1) / 2);
            }
        }
    };
};