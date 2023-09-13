
// 1 USD = 80 INR
const INR = 80; 

const items = {
  "item1": 100,   // USD
  "item2": 50,
  "item3": 18
};

const itemsInRupees = Object.fromEntries(
  Object.entries(items).map(([item, price]) => {
    const priceInRupees = price * INR;
    return [item, priceInRupees];
  })
);

console.log(itemsInRupees); // { item1: 800, item2: 1600, item3: 2400 }