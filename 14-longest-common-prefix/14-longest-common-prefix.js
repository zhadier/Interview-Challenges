/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let test = '';
    for(let j=1 ; j<=strs[0].length; j++) {
    let check = new RegExp('^'+ strs[0].substring(0, j))
    console.log(strs[0].substring(0,j))
        for(let i= 0; i < strs.length; i++) {
            let checker = strs[i].match(check);
            if (checker === null) {
                return test;
            }
        }
        test = strs[0].match(check)[0];
    }
    return test;
};