import { objectValues, parseClassName } from '../../src/utils';

describe('Validator', () => {
  describe('objectValues', () => {
    it('Should return the values hold by an object', () => {
      expect(objectValues({ a: 1, b: 3 })).toMatchObject([1, 3]);
    });
  });

  describe("parseClassName", () => {
    it("Should return a string if input is a string", () => {
      expect(parseClassName('foo')).toBe('foo');
    });

    it("Should return null on invalid input", () => {
      // @ts-ignore
      expect(parseClassName(113123412)).toBe(null);
    })
  })
});
