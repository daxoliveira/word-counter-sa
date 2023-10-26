const { readText, countWords, findMostUsedWord } = require('./index');

test('readText should read and return text from a file', async () => {
  const text = await readText('./resources/MobyDick.txt');
  expect(text).toBeDefined();
  expect(text.length).toBeGreaterThan(0);
});

test('countWords should correctly count words', () => {
  const text = 'This is a test. This is only a test.';
  const wordCounts = countWords(text);
  expect(wordCounts).toEqual({
    'this': 2,
    'is': 2,
    'a': 2,
    'test': 2,
    'only': 1,
  });
});

test('findMostUsedWord should return the most used word', () => {
  const wordCounts = {
    'this': 2,
    'is': 2,
    'a': 1,
    'test': 2,
    'only': 1,
  };
  const mostUsedWord = findMostUsedWord(wordCounts);
  expect(['this', 'is', 'test']).toContain(mostUsedWord);
});