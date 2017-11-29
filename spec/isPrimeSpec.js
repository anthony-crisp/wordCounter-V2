const isPrime = require('../src/isPrime.js');

describe('#isPrime', () => {
  it('checks if 1 is prime', () => {
    expect(isPrime(1)).toEqual(false);
  });

  it('checks if 2 is prime', () => {
    expect(isPrime(2)).toEqual(true);
  });

  it('checks if 4 is prime', () => {
    expect(isPrime(4)).toEqual(false);
  });

  it('checks sveral primes', () => {
    const randPrime = [15083, 25523, 2069, 19087, 24133, 21713, 26863, 7741, 8111, 3203];
    for (const n of randPrime) { expect(isPrime(n)).toEqual(true); }
  });

  it('checks sveral non primes', () => {
    const randNoPrime = [26934, 22421, 19004, 25009, 26762, 5983, 41758, 49876, 35236, 41670];
    for (const n of randNoPrime) { expect(isPrime(n)).toEqual(false); }
  });
});
