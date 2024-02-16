const waitFiveSeconds = async () => {
    console.log("Start waiting...");
    await new Promise(resolve => setTimeout(resolve, 5000)); // Wait for 5 seconds
    console.log("Finished waiting!");
};

const main = async () => {
    console.log("Before waiting...");
    await waitFiveSeconds(); // Call the async function to wait for 5 seconds
    console.log("After waiting!");
};

main();


