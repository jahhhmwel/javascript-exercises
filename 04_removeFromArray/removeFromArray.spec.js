const removeFromArray = require('./removeFromArray')

describe('removeFromArray', () => {
  test('removes a single value', () => {
    expect(removeFromArray([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  ('removes multiple values', () => {
    expect(removeFromArray([1, 2, 3, 4], 3, 2)).toEqual([1, 4]);
  });
  ('removes multiple of the same value', () => {
    expect(removeFromArray([1, 2, 2, 3], 2)).toEqual([1, 3]);
  });
  ('ignores non present values', () => {
    expect(removeFromArray([1, 2, 3, 4], 7, "tacos")).toEqual([1, 2, 3, 4]);
  });
  ('ignores non present values, but still works', () => {
    expect(removeFromArray([1, 2, 3, 4], 7, 2)).toEqual([1, 3, 4]);
  });
  ('can remove all values', () => {
    expect(removeFromArray([1, 2, 3, 4], 1, 2, 3, 4)).toEqual([]);
  });
  ('works with strings', () => {
    expect(removeFromArray(["hey", 2, 3, "ho"], "hey", 3)).toEqual([2, "ho"]);
  });
  ('only removes same type', () => {
    expect(removeFromArray([1, 2, 3], "1", 3)).toEqual([1, 2]);
  });
});
