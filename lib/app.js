const fs = require('fs');

const filename = process.argv[2];
const WordCounter = require('../src/wordCounter.js');

function runCount(filename) {
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) throw err;
    wordCounter = new WordCounter();
    wordCounter.addWordsToArray(data);
    wordCounter.countWords();
    wordCounter.addPrime();
    console.log(wordCounter.wordHashWithPrime);
  });
}

runCount(filename);
