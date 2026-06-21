var maxProfit = function(prices) {
    // [7,1,5,3,6,4]
    let minPrice = prices[0];
    let maxPrice = 0;
    for(let i = 1; i < prices.length; i++){
        let currentPrice = prices[i];
        minPrice = Math.min(currentPrice, minPrice)
        let potentialProfit = currentPrice - minPrice;
        maxPrice = Math.max(maxPrice, potentialProfit);
    }
    return maxPrice;
};