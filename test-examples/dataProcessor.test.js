const { countWords, findMax } = require('/.dataProcessor');

test('shoulds count words in simple text', () => {
    const result = countWords('Hello world test')
    expect(result).toBe(3);
});


test('shoulds find the maximun number', () => {
    const result = findMax([5,10,3,8]);
    expect(result).toBe(10);
});

