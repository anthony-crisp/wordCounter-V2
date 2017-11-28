const WordCounter = require('../src/wordcounter.js');

describe('textFormatter', () => {
  beforeEach(() => {
    textFormatter = new WordCounter();
  });

  it('ignores all types of whitespace', () => {
    const textWithWhitespace = 'hello    world';
    textFormatter.addWordsToArray(textWithWhitespace);
    expect(textFormatter.wordArray).toEqual(['hello', 'world']);
  });

  it('ignores punctuation', () => {
    const punctuatedText = 'goodbye^/?|,. ;:world!?*';
    textFormatter.addWordsToArray(punctuatedText);
    expect(textFormatter.wordArray).toEqual(['goodbye', 'world']);
  });

  it('ignores hyphens', () => {
    const hyphenatedText = 'wood-and-plaster';
    textFormatter.addWordsToArray(hyphenatedText);
    expect(textFormatter.wordArray).toEqual(['wood', 'and', 'plaster']);
  });

  it('ignores apostrophes', () => {
    const apostropheText = 'don\'t couldn\'t you\'re';
    textFormatter.addWordsToArray(apostropheText);
    expect(textFormatter.wordArray).toEqual(['dont', 'couldnt', 'youre']);
  });

  it('ignores capitalisation', () => {
    const capitalisedText = 'Hello World HELLO WORLD hello world';
    textFormatter.addWordsToArray(capitalisedText);
    textFormatter.countWords();
    expect(textFormatter.wordHash).toEqual({
      hello: 3,
      world: 3,
    });
  });
});
