

const readline = require('readline');

// Function to validate email
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Function to validate personal information
function isValidPersonalInfo(input) {
    const personalInfoRegex = /^[A-Za-z0-9](?:[A-Za-z0-9$]*[A-Za-z0-9])?(?:\.[A-Za-z0-9]+)*$/;
    return personalInfoRegex.test(input);
}

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Get user input for email
rl.question("Enter your email: ", (userEmail) => {
    if (validateEmail(userEmail)) {
        console.log("Valid email");
    } else {
        console.log("Invalid email");
    }
    
    // Close readline interface
    rl.close();
});

// Create another readline interface for personal information
const rl2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Get user input for personal information
rl2.question("Enter your personal information: ", (userPersonalInfo) => {
    if (isValidPersonalInfo(userPersonalInfo)) {
        console.log("Valid personal information");
    } else {
        console.log("Invalid personal information");
    }
    
    // Close readline interface
    rl2.close();
});
