const WordCounter = require('../src/wordCounter.js');
const isPrime = require('../src/isPrime.js');

describe('wordCounter', () => {
  beforeEach(() => {
    wordCounter = new WordCounter();
  });

  describe('#addPrime', () => {
    it('states if word occurrence is prime', () => {
      const text = 'The good news about computers is that they do what you tell them to do. The bad news is that they do what you tell them to do.';
      // ^^ Ted Nelson ^^
      wordCounter.addWordsToArray(text);
      wordCounter.countWords();
      wordCounter.addPrime();

      expect(wordCounter.wordHashWithPrime).toEqual({
        the: [2, true],
        good: [1, false],
        news: [2, true],
        about: [1, false],
        computers: [1, false],
        is: [2, true],
        that: [2, true],
        they: [2, true],
        do: [4, false],
        what: [2, true],
        you: [2, true],
        tell: [2, true],
        them: [2, true],
        to: [2, true],
        bad: [1, false],
      });
    });
  });
});
