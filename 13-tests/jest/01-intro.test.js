const { add } = require('../add');
const { describe, expect, it } = require('@jest/globals');

describe('add', () => {
  it('adds 1 + 2 to equal 3', () => {
    const result = add(1, 2);
    expect(result).toStrictEqual(3);
  });

  it('async example', (done) => {
    setTimeout(() => {
      done();
    }, 2000);
  });

  it('async example', () => {
    const a = {
      c: { b: 3, a: 2 },
      a: 3,
    };
    expect(a).toEqual(expect.objectContaining({ c: { b: 3, a: expect. } }));
  });
});
