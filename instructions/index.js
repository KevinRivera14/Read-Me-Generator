// to start off this assignment i must first import the modules i need
const inquirer = require("inquirer");
const fs = require("fs");

// this is where i will be linking the file where my README will appear 
const createPage = require("./utils/generateMarkdown.js");

const questions = () => {
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
            validate: (nameInput) => {
                if (nameInput) {
                    return true;
                } else {
                    console.log(
                        "Please choose a license!"
                    );
                    return false;
                }
            },
        },
        {
            type: "input",
            message:
                "Please write a description of your project:",
            name: "description",
        },
        {
            type: "input",
            message:
                "What are the steps required to install your project?",
            name: "installation",
        },
        {
            type: "input",
            message:
                "How do you use this app?",
            name: "usage",
        },
        {
            type: "input",
            message:
                'What does the user need to know about contributing to the repo? If you do not allow contributions, type "N/A":',
            name: "contributing",
        },
        {
            type: "input",
            message:
                "What is the URL to your Github account?:",
            name: "github_url",
        },
        {
            type: "input",
            message:
                "If a user has questions about your project, what is your email address?:",
            name: "email",
        },
        {
            type: "input",
            message:
                'What command should be entered to run tests? If no tests exist, type "N/A".',
            name: "tests",
        },
        {
            type: "input",
            message:
                "Enter a copyright year for your project:",
            name: "copyright_year",
        },
        {
            type: "input",
            message:
                "Enter your name for the copyright section of the README:",
            name: "author",
        },
    ]);
};

// function write README file using file system system
const writeFile = data => {
    fs.writeFile('./instructions/README.md', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
            // when the README has been created 
        } else {
            console.log("Your README has been successfully created!")
        }
    })
};

// function to initialize program
questions()
    // get user answers
    .then(answers => {
        return createPage(answers);
    })
    //using data to display on page
    .then(data => {
        return writeFile(data);
    }); 