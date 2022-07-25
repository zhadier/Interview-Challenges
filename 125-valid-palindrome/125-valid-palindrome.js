/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let check = s.match(/[a-z|0-9]/ig)
    if(check === null || check.join('').toLowerCase() === check.reverse().join('').toLowerCase()) {
        return true
    }
    return false;
};