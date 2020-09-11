const { joinNames } = require('../src');

describe('joinNames', () => {
  test('returns string of names, seperated by commas and an ampersand', () => {
    const namesObj = [{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }];

    expect(joinNames(namesObj)).toBe('Bart, Lisa & Maggie');
  });

  test('returns string of names, seperated by commas and an ampersand', () => {
    const namesObj = [
      { name: 'Homer' },
      { name: 'Marge' },
      { name: 'Bart' },
      { name: 'Lisa' },
      { name: 'Maggie' },
    ];

    expect(joinNames(namesObj)).toBe('Homer, Marge, Bart, Lisa & Maggie');
  });

  test('returns string of one name, if only one name object is passed in', () => {
    const namesObj = [{ name: 'Homer' }];

    expect(joinNames(namesObj)).toBe('Homer');
  });
});
