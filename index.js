// index.js - A day in the life of a developer

// Initialize the Developer's Day
console.log("Good morning, Developer! Time to begin the coding journey...");

// Placeholder for a developer's first task: Bug Fixing
function fixBugs() {
  console.log("Fixing bugs... (The never-ending task)");
  setTimeout(() => {
    console.log("Bug fixed! Just kidding... more bugs later.");
  }, 2000);
}

// Placeholder for the second task: Writing code
function writeCode() {
  console.log("Writing clean, optimized code...");
  setTimeout(() => {
    console.log("Code written. Time to refactor it in 5 minutes.");
  }, 3000);
}

// Placeholder for third task: Pull Request
function createPullRequest() {
  console.log("Creating a pull request... Please review, teammates.");
  setTimeout(() => {
    console.log("Waiting for code review... Hopefully, no major comments.");
  }, 4000);
}

// Placeholder for fourth task: Deploying to Production
function deployToProduction() {
  console.log("Deploying to production... crossing fingers.");
  setTimeout(() => {
    console.log("Everything's fine... until the 3 AM server crash.");
  }, 5000);
}

// A developer's journey in one day
function developersDay() {
  fixBugs();
  writeCode();
  createPullRequest();
  deployToProduction();
}

// A bit of interactivity: A developer can choose how their day goes
const choices = ["Fix bugs", "Write code", "Create PR", "Deploy to prod"];
let choice = prompt("What should we do first? (Choose a task): " + choices.join(", "));

switch(choice.toLowerCase()) {
  case "fix bugs":
    fixBugs();
    break;
  case "write code":
    writeCode();
    break;
  case "create pr":
    createPullRequest();
    break;
  case "deploy to prod":
    deployToProduction();
    break;
  default:
    console.log("You chose an invalid task, but that's okay, just keep coding!");
}

// Start the developer's day
developersDay();
