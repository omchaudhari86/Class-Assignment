function calculateVolume(length) {
    // Check if the input is a number
    if (!Number.isFinite(length)) {
        throw new Error('The input must be a number');
    }

    // Calculate the volume of the cube
    return length * length * length;
}

// Create a prompt to get the input from the user
const length = prompt('Enter the length of the cube: ');

// Calculate the volume of the cube
const volume = calculateVolume(length);

// Display the result to the user
console.log('The volume of the cube is:', volume);
