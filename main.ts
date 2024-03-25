#! /usr/bin/env/ node
import inquirer from "inquirer"
import chalk from "chalk"
const answers = await inquirer.prompt([
    {message: (chalk.bgBlue(" enter first number")), type: "number",name: "firstName"},
    {message: (chalk.bgBlue("enter second number")), type: "number",name: "secondName"},
    {message: "select one off the operators to perform action",
    type: "list",
    name: "operators",
    choices: ["+", "-", "*", "/"], 
},
    
]);
if(answers.operators ===  "+"){
    console.log(answers.firstName + answers.secondName);
}
else if(answers.operators === "-"){
    console.log(answers.firstName - answers.secondName);
} 
else if(answers.operators === "*"){
    console.log(answers.firstName * answers.secondName);
} 
else if(answers.operators === "/"){
    console.log(answers.firstName / answers.secondName);
} 
else {
    console.log("please select a valid operater")
}
