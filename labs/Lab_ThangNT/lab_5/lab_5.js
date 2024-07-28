/**
 * Given string "Hello ban, tui ten Teo, ban cung ten Teo luon ah" 
 * --> output
 * Hello: 1
 * ban: 2
 * tui: 1
 * ten: 2
 * Teo: 2
 * ...
 */
const readline = require('readline-sync');
// const givingString = "Hello ban, tui ten Teo, ban cung ten Teo luon ah";

const givenString = readline.question('Enter your sentence: ');
console.log(givenString);

groupWords(givenString);

function groupWords(givenString) {
    const words = givenString.replace(/,/g, "").split(' ');
    console.log(words);
    let wordCount = {};
    for (const word of words) {
        console.log(word);
        if (wordCount[word] === undefined) {
            wordCount[word] = 1;
        } else {
            wordCount[word] = wordCount[word] + 1;
        }
    }
    console.log(wordCount);
}

