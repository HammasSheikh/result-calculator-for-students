#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        message: "tell me what percentage did you get?",
        type: "number",
        name: "percentage"
    }
]);
if (answer.percentage <= 40) {
    console.log("oh no! you are failed");
}
else if (answer.percentage >= 40 && answer.percentage <= 49.99) {
    console.log("CONGRATULATIONS! You got D grade ");
}
else if (answer.percentage >= 50 && answer.percentage <= 59.99) {
    console.log("CONGRATULATIONS! You got C grade ");
}
else if (answer.percentage >= 60 && answer.percentage <= 69.99) {
    console.log("CONGRATULATIONS! You got B grade ");
}
else if (answer.percentage >= 70 && answer.percentage <= 79.99) {
    console.log("CONGRATULATIONS! You got A grade ");
}
else if (answer.percentage >= 80 && answer.percentage <= 99.99) {
    console.log("CONGRATULATIONS! You got A1 grade... BRILLIANT PERFORMANCE ");
}
else {
    console.log("something is wrong");
}
// console.log(answer)
