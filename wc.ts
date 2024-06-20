#!/usr/bin/env node

import inquirer from "inquirer"

const paragraph = await inquirer.prompt([
    {
        name : "lines",
        type : "input",
        message : "write your sentences in the form of paragraph"
    }
])

const words = paragraph.lines.trim().split(" ")

console.log(words); 
console.log(`total words of my lines is ${words.length}`);