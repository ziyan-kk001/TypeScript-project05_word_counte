import inquirer from "inquirer";
console.log("Well_Come_to_My_Word_Counter");
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the word: "
    }
]);
const words = answers.Sentence.trim().split(" ");
console.log(`Your sentence word count is ${words.length}`);
