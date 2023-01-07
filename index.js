// to start off this assignment i must first import the modules i need
const inquirer = require("inquirer");
const fs = require("fs");

// this is where i will be linking the file where my README will appear 
const createPage = require("./utils/generateMarkdown.js");

const concerns = () => {
    // use inquirer to prompt for questions
    return inquirer.prompt([
        {
            type: "input",
            message:
                "what is the title of your project:",
            name: "name_project",
        },
        {
            type: "list",
            name: "license",
            message:
                "in this project of yours what will license will it require ?",
            choices: ["MIT", "GNU",],
            default: ["MIT"],
            validate: (name) => {
                if (name) {
                    return true;
                } else {
                    console.log(
                        " choose a license!"
                    );
                    return false;
                }
            },
        },
        {
            type: "input",
            message:
                "if you were to kind write a brief description that relates to your project:",
            name: "explanation",
        },
        {
            type: "input",
            message:
                "What steps are required for you project?",
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
                'what does one need to know before contributing ?',
            name: "contributing",
        },
        {
            type: "input",
            message:
                "Github URL ?:",
            name: "url_github",
        },
        {
            type: "input",
            message:
                "what email address do you use to answer questions about your app ?:",
            name: "email",
        },
        {
            type: "input",
            message:
                'in order to run test,what command should be entered ?',
            name: "tests",
        },
        {
            type: "input",
            message:
                "what year was your project made in ?",
            name: "copyright_year",
        },
        {
            type: "input",
            message:
                "Enter the rightful owners name ",
            name: "author",
        },
    ]);
};


const writeFile = data => {
    fs.writeFile('./instructions/README.md', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
            // this only works when the readme is crated  
        } else {
            console.log("Your README has been successfully created!")
        }
    })
};

// the function below will initialize the program
concerns()
    
    .then(answers => {
        return createPage(answers);
    })
    
    .then(data => {
        return writeFile(data);
    }); 