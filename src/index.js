const fs = require('fs').promises;

async function readText(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    return data;
  } catch (err) {
    throw err;
  }
}

function countWords(data) {
  // Changed regular expression to match words only
  const wordsArr = data.match(/\b\w+\b/g);

  if (!wordsArr) {
    return {};
  }

  const countWordsObj = {};

  for (let i = 0; i < wordsArr.length; i++) {
    const wordLowerCase = wordsArr[i].toLowerCase();
    if (wordLowerCase in countWordsObj) {
      countWordsObj[wordLowerCase] += 1;
    } else {
      countWordsObj[wordLowerCase] = 1;
    }
  }
  return countWordsObj;
}

function findMostUsedWord(countWordsObj) {
  const mostUsedWord = Object.entries(countWordsObj).reduce((prev, curr) => {
    return prev[1] > curr[1] ? prev : curr;
  });
  return mostUsedWord[0];
}

// async function start() {
//   try {
//     // Step 1: Read the text from the file
//     console.log('Reading text from MobyDick.txt...');
//     const text = await readText('./resources/MobyDick.txt');

//     // Step 2: Sanitize the text and count words
//     console.log('Sanitizing and counting words...');
//     const wordCounts = countWords(text);

//     // Step 3: Find the most used word
//     console.log('Finding the most used word...');
//     const mostUsedWord = findMostUsedWord(wordCounts);

//     // Step 4: Count the occurrences of the most used word
//     const mostUsedWordCount = wordCounts[mostUsedWord];

//     // Step 5: Display the result
//     console.log('Most used word:', mostUsedWord);
//     console.log(`Used ${mostUsedWordCount} times.`);
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }

// start();

module.exports = {
  readText,
  countWords,
  findMostUsedWord,
};