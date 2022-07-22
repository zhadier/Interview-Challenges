/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let map = new Map([['I',1], ['V',5], ['X',10], ['L',50], ['C',100], ['D',500], ['M',1000]]);
    let str = s.split('').map((a)=>map.get(a));
    let sum = 0;
    for(let i=0; i<s.length;i++) {
        if(str[i]< str[i+1]) {
            sum += str[i+1]-str[i];
            i++;
        }
        else {
            sum+=str[i];
        }
    }
    return sum
};