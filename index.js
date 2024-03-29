#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const inquirer_1 = __importDefault(require("inquirer"));
function rainbowText(text) {
    const rainbowColors = [
        chalk_1.default.red.bold.italic,
        chalk_1.default.yellow.bold.italic,
        chalk_1.default.green.bold.italic,
        chalk_1.default.blue.bold.italic,
        chalk_1.default.magenta.bold.italic,
        chalk_1.default.cyan.bold.italic
    ];
    let coloredText = '';
    for (let i = 0; i < text.length; i++) {
        const color = rainbowColors[i % rainbowColors.length];
        coloredText += color(text[i]);
    }
    return coloredText;
}
let myBalance = 100000; // Dollar
let myPin = 1234;
let pinAnswer = await inquirer_1.default.prompt([
    {
        name: "pin",
        message: chalk_1.default.yellowBright.italic.bold("\nPlease Enter Your PIN number."),
        type: "number"
    }
]);
//console.log(pinAnswer);
if (pinAnswer.pin === myPin) {
    console.log(rainbowText("\nIt is Correct PIN number!!!"));
    let operationAns = await inquirer_1.default.prompt([
        {
            name: "operation",
            message: chalk_1.default.yellowBright.italic.bold("\nPlease Select Option."),
            type: "list",
            choices: ["Fast Withdraw Amount", "Withdraw Amount", "Check Balance"]
        }
    ]);
    if (operationAns.operation === "Fast Withdraw Amount") {
        let amountAns = await inquirer_1.default.prompt([
            {
                name: "amount",
                message: chalk_1.default.yellowBright.italic.bold("\nChoose An Amount for Quick & Fast Cash Withdrawal:"),
                type: "list",
                choices: ["500", "1000", "3000", "5000", "10000"]
            }
        ]);
        myBalance -= amountAns.amount;
        console.log(chalk_1.default.greenBright.italic.bold.underline("\nYour Remaining Balance is: " + myBalance));
        //console.log(operationAns);
    }
    else if (operationAns.operation === "Withdraw Amount") {
        let amountAns = await inquirer_1.default.prompt([
            {
                name: "amount",
                message: chalk_1.default.yellowBright.italic.bold("\nEnter Your Required Withdraw Amount."),
                type: "number"
            }
        ]);
        if (amountAns.amount <= myBalance) {
            //console.log(amountAns.amount);
            // =, -=, +=
            myBalance -= amountAns.amount;
            console.log(chalk_1.default.greenBright.italic.bold.underline("\nNow Your Remaining Balance is: " + myBalance));
        }
        else {
            console.log(chalk_1.default.greenBright.italic.bold.underline("\nYou have Insufficient Balance"));
        }
    }
    if (operationAns.operation === "Check Balance") {
        console.log(chalk_1.default.greenBright.italic.bold.underline("\nYour Balance is: " + myBalance));
    }
}
else {
    console.log(chalk_1.default.magentaBright.italic.bold.underline("\nYou Entered Incorrect PIN number."));
}
const currentDateTime = new Date();
const currentDate = currentDateTime.toLocaleDateString();
const currentTime = currentDateTime.toLocaleTimeString();
console.log(rainbowText(`\nTransaction Date:${currentDate} & Time:${currentTime}`));
console.log(rainbowText("\nThanks for choosing Karachi Bank ATM.Visit soon, Have a good day!"));
