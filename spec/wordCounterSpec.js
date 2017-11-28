const WordCounter = require('../src/wordcounter.js');

describe('wordCounter', () => {
  beforeEach(() => {
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
});
