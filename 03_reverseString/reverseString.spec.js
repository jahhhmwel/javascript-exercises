const reverseString = require('./reverseString');

describe('reverseString', () => {
  test('reverses single word', () => {
    expect(reverseString('hello')).toEqual('olleh');
  });

  ('reverses multiple words', () => {
    expect(reverseString('hello there')).toEqual('ereht olleh');
  });

  ('works with numbers and punctuation', () => {
    expect(reverseString('123! abc! Hello, Odinite.')).toEqual(
      '.etinidO ,olleH !cba !321'
    );
  });
  ('works with blank strings', () => {
    expect(reverseString('')).toEqual('');
  });
});
