// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    let coinValues = [50, 25, 10, 5, 1];
    let coinNames = ["H", "Q", "D", "N", "P"];
    //let coinsQuantity = [];
    let coinResult = {};
    /*let currency = currency;*/
    if (currency <= 0) {
        return {};
    }
    if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
    for (let i = 0; i < coinValues.length; i++) {
        if (Math.floor(currency / coinValues[i]) || 0) {
            coinResult[coinNames[i]] = Math.floor(currency / coinValues[i]);
            currency -= coinValues[i] * Math.floor(currency / coinValues[i]);
        }
    }
    // Return an object containing the minimum number of coins needed to make change
    console.log(coinResult);
    return coinResult;
}

