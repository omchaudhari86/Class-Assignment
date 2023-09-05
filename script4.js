function calculateSurfaceArea(radius, height) {
    // Check if the input is a number
    if (!Number.isFinite(radius) || !Number.isFinite(height)) {
        throw new Error('The input must be a number');
    }

    // Calculate the surface area of the cylinder
    return 2 * Math.PI * radius * height + 2 * Math.PI * radius * radius;
}

// Create a prompt to get the input from the user
const radius = prompt('Enter the radius of the cylinder: ');
const height = prompt('Enter the height of the cylinder: ');

// Calculate the surface area of the cylinder
const surfaceArea = calculateSurfaceArea(radius, height);

// Display the result to the user
console.log('The surface area of the cylinder is:', surfaceArea);
