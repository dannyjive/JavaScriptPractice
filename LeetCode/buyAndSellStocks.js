var maxProfit = function (prices) {

    let lowPrice = prices[0];
    let mostProfit = 0;
    
    for (let i = 1; i < prices.length; i++){
        if (prices[i] < lowPrice){
            lowPrice = prices[i]
        } else{
            let profitToday = prices[i] - lowPrice;
            mostProfit = Math.max(mostProfit, profitToday);
        }

    }
    return mostProfit;

};