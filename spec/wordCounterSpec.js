const WordCounter = require('../src/wordCounter.js');

describe('wordCounter', () => {
  beforeEach(function() {
    wordCounter = new WordCounter();
  });

  describe('on initialisation', () => {
    it('has an empty wordArray', () => {
      expect(wordCounter.wordArray).toEqual([]);
    });

    it('has an empty wordHash', () => {
      expect(wordCounter.wordHash).toEqual({});
    });

    it('has an empty wordHashWithPrime', () => {
      expect(wordCounter.wordHashWithPrime).toEqual({});
    });
  });

  describe('#addWordsToArray', () => {
    it('adds each word to wordArray', () => {
      const text = 'hello world';
      wordCounter.addWordsToArray(text);

      expect(wordCounter.wordArray).toEqual(['hello', 'world']);
    });
  });
});
