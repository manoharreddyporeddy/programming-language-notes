import sum from './sum';

it('sums numbers', () => {
    expect(sum(1, 2)).toEqual(3);
});

test('sums numbers', () => {
    expect(sum(2, 2)).toEqual(4);
});
