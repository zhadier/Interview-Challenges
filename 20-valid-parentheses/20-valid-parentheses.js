/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const queue = [];
    const map = new Map([
        [']','[']
        ,[')','(']
        ,['}','{']
    ]);
   for(let i=0; i<s.length; i++) {
       if(map.has(s[i])) {
           if(queue.pop() === map.get(s[i])) {
              continue;
              }
           return false;
       }
       queue.push(s[i]);
   }
    if(!queue.length) {
        return true;
    }
    return false;
};