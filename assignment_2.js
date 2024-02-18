const readline = require('readline');

// Function to validate email
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Create readline interface for email input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Get user input for email
rl.question("Enter your email: ", (userEmail) => {
    userEmail = userEmail.trim(); // Trim the input
    if (validateEmail(userEmail)) {
        console.log("Valid email");
        // After validating email, prompt for personal information
        promptPersonalInfo();
    } else {
        console.log("Invalid email");
        rl.close();
        promptPersonalInfo();
    }
});
    const personalInfoPattern = /^[a-zA-Z0-9$]+(?:\.[a-zA-Z0-9$]+)*$/;

// Function to prompt for personal information
function promptPersonalInfo() {
    const r2 = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    getName(r2); // Pass the readline interface to the getName function
   
}

function getName(r2) { // Accept r2 as a parameter
    r2.question("Enter name: ", (uName) => {
        uName = uName.trim(); // Trim the input
        if (personalInfoPattern.test(uName)) {
            getAddress(r2); // Pass r2 to the next function
        } else {
            console.log("Invalid name");
            getName(r2); // Ask again for name
        }
    });
}

function getAddress(r2) { // Accept r2 as a parameter
    r2.question("Enter address: ", (uAddress) => {
        uAddress = uAddress.trim(); // Trim the input
        if (personalInfoPattern.test(uAddress)) {
            getDomain(r2); // Pass r2 to the next function
        } else {
            console.log("Invalid address");
            getAddress(r2); // Ask again for address
        }
    });
}

function getDomain(r2) { // Accept r2 as a parameter
    r2.question("Enter domain: ", (uDomain) => {
        uDomain = uDomain.trim(); // Trim the input
        if (personalInfoPattern.test(uDomain)) {
            console.log("Valid info");
            r2.close();
        } else {
            console.log("Invalid domain");
            getDomain(r2); // Ask again for domain
        }
    });
}

