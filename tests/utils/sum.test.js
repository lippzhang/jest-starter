const sum = require('../../src/utils/sum')

describe('sum', () => { 
  it('可以做加法', () => {
    expect(sum(1, 2)).toBe(3);
  });
 })