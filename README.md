WordCounter-V2
==============

This is the second version of a javascript application that counts occurrences of words in a .txt file and outputs the resultant hash including whether the number of occurrences is a prime number.

Methodology
===========

## User Stories

```

As a user,
so that I can see the number of times a word appears in a txt file,
I want to be able to output the individual words and how many times it appears.


As a user,
Because I am curious, I would like to see if the occurrences of the words are prime numbers,
that is, if the number is divisible by only itself and 1.
```

### Part 1
When I last submitted this test I did so with a broken package.json file so it was impossible to load node dependencies. This is now fixed (sorry).

### Part 2
I decided to take this as an opportunity to get better acquainted with ES6 syntax, so I tried out the class constructors and re-built the main application in that style

### Part 3
I also took this as an opportunity to refine the program to better split words and count them, in the previous version words like "don't" would be counted as two words "don" and "t" now it is counted as one word "dont".
Equally hyphenated words were combined into a single word, so "wood-and-plaster" originally became "woodandplaster", and is now "wood", "and", "plaster".

### Part 4
I then extracted my tests into different files to make it easier to see what was being tested and added several more tests to confirm the new functionality that I have added.

Usage
===============

### Technologies Used
- ES6 javascript
- Jasmine-node
- Node.js

### Installation
- ```git clone https://github.com/anthony-crisp/wordCounter-V2 ```
- ```cd wordCounter-V2```
- ```npm install```

### How to use
- run ```node lib/app.js lib/data/testText.txt``` (Test examples)
- run ```node lib/app.js lib/data/railway-children-by-e-nesbit.txt``` (Book as required by client)


### Running Tests
- run ```npm test```