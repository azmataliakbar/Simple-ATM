#!/usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";

function rainbowText(text: any) {
  const rainbowColors = [
      chalk.red.bold.italic,
      chalk.yellow.bold.italic,
      chalk.green.bold.italic,
      chalk.blue.bold.italic,
      chalk.magenta.bold.italic,
      chalk.cyan.bold.italic
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

let pinAnswer = await inquirer.prompt(
  [
    {
      name: "pin",
      message: chalk.yellowBright.italic.bold("\nPlease Enter Your PIN number."),
      type: "number"
    }

  ]
);
    //console.log(pinAnswer);

if (pinAnswer.pin === myPin) {
  
console.log(rainbowText("It is Correct PIN number!!!"));

let operationAns = await inquirer.prompt(
  [
      {
        name: "operation",
        message: chalk.yellowBright.italic.bold("\nPlease Select Option."),
        type: "list",
        choices: ["Fast Withdraw Amount", "Withdraw Amount", "Check Balance"]

      }
  ]
);

if (operationAns.operation === "Fast Withdraw Amount") {

  let amountAns = await inquirer.prompt(
    [
        {
          name: "amount",
          message: chalk.yellowBright.italic.bold("\nChoose An Amount for Quick & Fast Cash Withdrawal:"),
          type: "list",
          choices: ["500", "1000","3000", "5000", "10000"]
        }
  
    ]
  );

  myBalance -= amountAns.amount;

console.log(chalk.greenBright.italic.bold.underline("\nYour Remaining Balance is: " + myBalance));

      //console.log(operationAns);

  }else if (operationAns.operation === "Withdraw Amount") {

let amountAns = await inquirer.prompt(
  [
      {
        name: "amount",
        message: chalk.yellowBright.italic.bold("\nEnter Your Required Amount"),
        type: "number"
      }

  ]
);

       //console.log(amountAns.amount);
      // =, -=, +=

myBalance -= amountAns.amount;

console.log(chalk.greenBright.italic.bold.underline("\nYour Remaining Balance is: " + myBalance));

} else if (operationAns.operation === "Check Balance") {

console.log(chalk.greenBright.italic.bold.underline("\nYour Balance is: " + myBalance));

}

} else {

console.log(chalk.magentaBright.italic.bold.underline("\nYou Entered Incorrect PIN number."));

}

const currentDateTime = new Date();
const currentDate = currentDateTime.toLocaleDateString();
const currentTime = currentDateTime.toLocaleTimeString();

console.log(rainbowText(`\nTransaction Date:${currentDate} & Time:${currentTime}`));

console.log(rainbowText("\nThanks for choosing Meezan Bank ATM.Visit soon, Have a good day!"))