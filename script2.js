function calculateAreaOfCircle() {
    // Get the radius from the user.
    const radius = prompt("Enter the radius of the circle: ");

    // Define the pi constant.
    const PI = 3.14;

    // Calculate the area of the circle.
    const area = PI * radius * radius;

    // Display the area of the circle.
    console.log("The area of the circle is: " + area);
}

// Call the calculateAreaOfCircle() function.
calculateAreaOfCircle();
