let arr = [
    {name: "shirt", category: "clothing"},
    {name: "pants", category: "clothing"},
    {name: "hat", category: "accessories"},
    {name: "sunglasses", category: "accessories"},
]

function filterByCategory(arr) {
    return function(category) {
      return arr.filter(function(arr) {
        return arr.category === category;
      });
    }
  }
  

  const filterByCategoryFn = filterByCategory(arr);

  const clothingProducts = filterByCategoryFn('clothing');
  console.log(clothingProducts);