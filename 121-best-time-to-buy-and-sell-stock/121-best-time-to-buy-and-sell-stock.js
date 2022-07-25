/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let least = Number.POSITIVE_INFINITY;
    let prof =0;
    const stock = prices.forEach((price) => {
        if(price<least) {
            least = price;
        }
        
       else if (price - least > prof) {
            prof = price - least;
       }
    });
    return prof;
};