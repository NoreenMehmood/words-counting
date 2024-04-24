#! /usr/bin/env node
import inquirer from "inquirer";

let user_ans = await inquirer.prompt(
    {
        name: "words",
        type: "input",
        message: "Enter a sentences",
})

let word_count = user_ans.words.trim().split(" ").length

console.log(`Your sentence has ${word_count} words.`);

