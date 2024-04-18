#! /usr/bin/env code

import inquirer from "inquirer"
//  Prompt the user to enter a sentence and wait for their response
const UserAnswer = await inquirer.prompt({
    name : "sentence",
    type : "input",
    message : "Write your sentence to count words: "
});

// Trim any leading or trailing whitespace from the entered sentence
// Split the trimmed sentence into an array of words using any whitespace characters as delimiters
let makeArray = UserAnswer.sentence.trim().split(" ")
console.log(makeArray);


    // Display the total word count to the user
console.log("Total words in your Sentence is:", makeArray.length);