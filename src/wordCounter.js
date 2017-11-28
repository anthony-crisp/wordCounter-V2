const isPrime = require('./isPrime.js');

class WordCounter {
  constructor(wordArray, wordHash, wordHashWithPrime) {
    this.wordArray = [];
    this.wordHash = {};
    this.wordHashWithPrime = {};
  }


  addWordsToArray(text) {
    this.wordArray = text
      .replace(/-/g, ' ')
      .replace(/'/g, '')
      .replace(/[^\w\s]|_/g, '')
      .split(/\s+/);
  }

  countWords() {
    for (let index = 0; index < this.wordArray.length; index += 1) {
      const word = this.wordArray[index].toLowerCase();
      if (this.wordHash[word] === undefined) {
        this.wordHash[word] = 1;
      } else {
        this.wordHash[word] += 1;
      }
    }
  }
  
  addPrime() {
  Object.keys(this.wordHash).forEach((key) => {
    const value = this.wordHash[key];
    const prime = isPrime(value);
    const arr = [value, prime];
    this.wordHashWithPrime[key] = arr;
  });
}
}
module.exports = WordCounter;
