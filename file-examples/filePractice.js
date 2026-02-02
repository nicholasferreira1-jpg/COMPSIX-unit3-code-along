// Reading files 
//const fs = require('fs');

// // Read file as a sync 
// const content = fs.readFileSync('./file-examples/student-responses.txt','utf8');
// console.log(content);

// Processing File Content
// const fs = require('fs');

// const content = fs.readFileSync('./file-examples/student-responses.txt','utf8');

// const lines = content.split('\n');

// console.log('Number of response:', lines.length);
// console.log('First response:', lines[0]);
// console.log('Last response:', lines[lines.length-1]);

// Working with Numbers from Files
const fs = require('fs');

const scoresText = fs.readFileSync('./file-examples/quiz-scores.txt','utf8');

// Convert text to array of numbers
const lines = scoresText.split('\n');
const scores = [];

for (let i=0; i< lines.length; i++) {
    const line = lines[i].trim(); // remove extra white spacce
    if(line.length > 0) {
        scores.push(parseFloat(line)); // The parseFloat() function converts text like "85.5" into the actual number 85.5 that you can use in calculations.
    } }

console.log('Scores:', scores);

console.log('Number of Scores:', scores.length);
