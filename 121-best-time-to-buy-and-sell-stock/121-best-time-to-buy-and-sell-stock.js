/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const stock = prices.reduce((stock, price) => {
        if(price<stock.least) {
            stock.least = price;
        }
        
       else if (price - stock.least > stock.prof) {
            stock.prof = price - stock.least;
       }
        return stock;
    }, {least: Number.POSITIVE_INFINITY, prof: 0});
    return stock.prof;
};