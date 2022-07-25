/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const stock = prices.reduce((stock, price) => {
        
        if(price<stock.least) {
            stock.least = price;
            stock.most = 0;
        }
        
       else if (price > stock.most) {
              stock.most = price;
              const currentProf = stock.most - stock.least;
              if(currentProf > stock.prof) {
                stock.prof = currentProf;
               }
       }
        return stock;
    }, {least: Number.POSITIVE_INFINITY, most: 0, prof: 0});
    return stock.prof;
};