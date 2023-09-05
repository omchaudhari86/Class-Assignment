function calculateSimpleInterest() {
    // Get the principal amount from the user.
    const principal = prompt("Enter the principal amount: ");

    // Get the interest rate from the user.
    const interestRate = prompt("Enter the interest rate: ");

    // Get the time period from the user.
    const timePeriod = prompt("Enter the time period in years: ");

    // Calculate the simple interest.
    const simpleInterest = principal * interestRate * timePeriod / 100;

    // Display the simple interest.
    console.log("The simple interest is: $" + simpleInterest);
}

// Call the calculateSimpleInterest() function.
calculateSimpleInterest();
