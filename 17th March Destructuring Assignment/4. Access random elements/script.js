function extractFirstSecondLast(arr) {
    const [first, second, ...rest] = arr;
    return [first, second, rest.pop()];
  }
  
  const arr = [1, 2, 3, 4, 5];
  const [first, second, last] = extractFirstSecondLast(arr);
  
  console.log(first); // Output: 1
  console.log(second); // Output: 2
  console.log(last); // Output: 5