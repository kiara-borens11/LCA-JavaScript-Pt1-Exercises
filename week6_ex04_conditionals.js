// Create a variable called score and give it a value between 0 and 100
const score = 85;

// Create a variable called passingGrade and set it to 60
const passingGrade = 60;

// Write an if statement to check if score is greater than or equal to passingGrade
if (score === 100) {
    // Add another condition to check if the score is perfect (100)
    console.log("Perfect score!");
    console.log("Passed");
} else if (score >= passingGrade) {
    console.log("Passed");
} else {
    // Add an else statement for when the score is below passingGrade
    console.log("Failed");
}