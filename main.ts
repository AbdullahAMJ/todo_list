#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let todoList: string[] = [];
let conditions = true;

console.log(chalk.green("\n \tWelcome to Todo_list\n"));

async function main() {
    while (conditions) {
        let addTask = await inquirer.prompt([
            {
                name: "task",
                type: "input",
                message: "Enter your new task:",
            }
        ]);
        todoList.push(addTask.task);
        console.log(chalk.blue(`${addTask.task} Task added to Todo_list successfully`));
        
        let addMoreTask = await inquirer.prompt([
            {
                name: "addmore",
                type: "confirm",
                message: "Do you want to add more tasks?",
                default: false,  // should be a boolean value
            }
        ]);
        conditions = addMoreTask.addmore;
    }
    console.log(chalk.yellow(`Your updated Todo_list: ${todoList.join(", ")}`));
}

main();
