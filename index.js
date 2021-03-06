// Variables and dependencies
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const writeFileAsync = util.promisify(fs.writeFile);

// User prompt 
const promptUser = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "Project title?",
        },
        {
            type: "input",
            name: "description",
            message: "Project description?",
        },
        {
            type: "input",
            name: "install",
            message: "Installation requirements?",
        },
        {
            type: "input",
            name: "usage",
            message: "Project usage?",
        },
        {
            type: "input",
            name: "contributors",
            message: "Contributors?",
        },
        {
            type: "input",
            name: "test",
            message: "How to test?",
        },
        {
            type: "list",
            name: "license",
            message: "Select a license:",
            choices: ["Apache", "GNU", "MIT"],
        },
        {
            type: "input",
            name: "github",
            message: "Enter your GitHub username.",
        },
        {
            type: "input",
            name: "email",
            message: "Enter your email address.",
        },
    ]);
};

// Initialize function
async function init() {
    console.log("Hello!");
    try {
        const data = await promptUser();
        const markdown = generateMarkdown(data);
        await writeFileAsync("README.md", markdown);
        console.log("Your README.md has been created.");
    } catch (err) {
        console.log(err);
    }
}

init();
