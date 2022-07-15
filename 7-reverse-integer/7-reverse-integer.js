/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let num = x;
    let numSize = num.toString().length;
    let holder = 0;
    let bound = Math.pow(2, 31) - 1;
    let size = bound.toString().length;
    const negative = x < 0;

    if(negative) {
        bound += 1;
        num = -num;
        numSize-=1;
    }
    
    if (size < numSize) {
        return 0;
    }
    
    else if (size > numSize) {
        return parseInt(x.toString().split('').reverse().join(''))*Math.sign(x)
    }
    
    let pos = Math.pow(10,size - 1);
    while(num !== 0) {
        const pop = num % 10;
        const boundPop = Math.floor(bound/pos);
        console.log(pop, boundPop, bound);
        bound -= boundPop *(pos)
        pos = pos /10;
        num =  Math.floor(num/10);
        if (pop < boundPop) {
           break;
        }
        if(pop > boundPop) return 0;
    }
    return parseInt(x.toString().split('').reverse().join(''))*Math.sign(x);

};

// const bounds = Math.pow(2, 31);
//     let num = String(x).split('').reverse();
//     let boundary = '';
//     let size = 0;
//     if(num[num.length -1] === '-') {
//         boundary = (bounds).toString().split('');
//         size = num.length - 1;
//     }
//     else {
//         boundary = (bounds - 1).toString().split('');
//         size = num.length;
//     }
    
//     if((size) > boundary.length) {
//         return 0;
//     }
//     else if(size === boundary.length) {
//         for(let i = 0; i < boundary.length ; i++) {
//             if(boundary[i] > num[i]) {
//                 break;
//             }
//             if(boundary[i] < num[i]) {
//                 return 0;
//             }
//         }
//     }
//     return parseInt(num.join(''))*Math.sign(x);