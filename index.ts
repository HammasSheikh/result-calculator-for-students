#! /usr/bin/env node

import inquirer from "inquirer"
const marks = await inquirer.prompt ([
    {
        message: "tell me how many marks did you get?", 
        type: "number",
        name: "obtainedMarks"
    },
    {
        message: "tell me what are the total marks?", 
        type: "number",
        name: "totalMarks"
    }
])

console.log ("you got " +  marks.obtainedMarks*100/marks.totalMarks + "! percentage");

    if(marks.obtainedMarks*100/marks.totalMarks <= 40){
        console.log("oh no! you are failed")
    } 
    else if (marks.obtainedMarks*100/marks.totalMarks >= 40 && marks.obtainedMarks*100/marks.totalMarks <= 49.99) {
        console.log("CONGRATULATIONS! You got D grade ")

    }
    else if (marks.obtainedMarks*100/marks.totalMarks >= 50 && marks.obtainedMarks*100/marks.totalMarks <= 59.99) {
        console.log("CONGRATULATIONS! You got C grade ")
        
    }
    else if (marks.obtainedMarks*100/marks.totalMarks >= 60 && marks.obtainedMarks*100/marks.totalMarks <= 69.99) {
        console.log("CONGRATULATIONS! You got B grade ")

    }
    else if (marks.obtainedMarks*100/marks.totalMarks >= 70 && marks.obtainedMarks*100/marks.totalMarks <= 79.99) {
        console.log("CONGRATULATIONS! You got A grade ")

    }else if (marks.obtainedMarks*100/marks.totalMarks >= 80 && marks.obtainedMarks*100/marks.totalMarks <= 99.99) {
        console.log("CONGRATULATIONS! You got A1 grade ")

    }
    else {console.log("something is wrong")
}