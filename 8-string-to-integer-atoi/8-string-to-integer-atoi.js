/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    const val = s.match(/^\s*[-|+]?(?=\d)[0-9]*/);
    const upperLimit = Math.pow(2,31)-1;
    const lowerLimit = -upperLimit - 1;
    if(val == null) {
        return 0;
    }
    const calc = parseInt(val[0]);
    if(val> upperLimit) {
        return upperLimit
    }
    else if(val< lowerLimit) {
        return lowerLimit
    }
    return val;
};