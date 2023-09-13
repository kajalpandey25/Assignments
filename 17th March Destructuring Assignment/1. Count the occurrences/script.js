function countWords(text) {
    const words = text.split(' ');
    const wordCount = new Map();
    
    for (let word of words) {
      if (wordCount.has(word)) {
        wordCount.set(word, wordCount.get(word) + 1);
      } else {
        wordCount.set(word, 1);
      }
    }
    
    return wordCount;
  }
  
  const text = 'the quick brown fox jumps over the lazy dog';
  const wordCount = countWords(text);
  
  for (let [word, count] of wordCount) {
    console.log(`${word}: ${count}`);
  }