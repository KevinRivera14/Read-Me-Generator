// to start off this assignment i must first import the modules i need
const inquirer = require("inquirer");
const fs = require("fs");

// this is where i will be linking the file where my README will appear 
const assemblePage = require("./utils/generateMarkdown.js");

const concerns = () => {
     
    // i decided to use inquirer in this part of my code 
    return inquirer.prompt([
        {
            type: "input",
            message:
                "what is the label of your project:",
            name: "name_project",
        },
        ,
        // these are where my questions will go 
        {
            type: "input",
            message:
                "what does  your project consist off  ?:",
            name: "explanation",
        },
        {
            type: "input",
            message:
                "What steps are necessary for Aquiring your project?",
            name: "installation",
        },
        {
            type: "input",
            message:
                "How would one use your app ?",
            name: "practice",
        },
        {
            type: "input",
            message:
                'how do i contribute ?',
            name: "contributing",
        },
        {
            type: "input",
            message:
                "Github ?:",
            name: "url_github",
        },
        {
            type: "input",
            message:
                "what do you use for eletronic emails  ?:",
            name: "email",
        },
        {
            type: "input",
            message:
                'commands to run a test?',
            name: "tests",
        },
        {
            type: "input",
            message:
                "What number is the year your project was made ?",
            name: "copyright_year",
        },
        {
            type: "input",
            message:
                "Who Made this ReadME? ",
            name: "author",
        },
    ]);
};


const writeFile = data => {
    fs.writeFile('./instructions/README.md', data, err => {
        
        if (err) {
            console.log(err);
            return;
             
        } else {
            console.log("Your README has been successfully created!")
        }
    })
};

// the function below will initialize the program
concerns()
    
    .then(answers => {
        return assemblePage(answers);
    })
    
    .then(data => {
        return writeFile(data);
    }); 