// Stock Market
// Write an function makeMoney that takes in an array of stock prices and returns the best profit you could have made from one purchase and one sale. The prices in the array are in the sequence in which they were purchased and can only be sold after it was purchased.

// [22, 6, 5, 8, 11, 10] -> 6 (since highest profit is from 11 - 5)

const makeMoney = (stock) => {

  // check if stock array length is at least 2
  if (stock.length < 2) {
    return "Error, could not find at least 2 prices to compare."
  }

  // using two for loops and us a result variable to track the largest profit
  let result = 0
  // for each price, check if the following numbers are larger
  for (i in stock) {
    let remaining = stock.slice(i);
    for (j in remaining) {
      let profit = remaining[j] - stock[i]
      // if so, check the difference for profit and check profit against the current result
      if (profit > result) {
        // if profit is greater, replace current result
        result = profit;
      }
    }
  }
  return result;
}

console.log(makeMoney([22, 6, 5, 8, 11, 10])); // 6 (since highest profit is from 11 - 5)

console.log(makeMoney([2, 6, 22, 8, 11, 10])); // 20

console.log(makeMoney([2, 55, 1, 8, 11, 10])); // 53