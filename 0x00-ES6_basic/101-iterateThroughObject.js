// Function to demonstrate variable assignment and conditional block behavior

// The taskBlock function takes a boolean value as an argument and returns an array of two boolean values.
// The variables 'task' and 'task2' are initialized with initial values.
// Depending on the value of the 'trueOrFalse' parameter, the variables may be updated inside the conditional block.

export default function taskBlock(trueOrFalse) {
  let task = false; // Initialize 'task' with a default value of false
  let task2 = true; // Initialize 'task2' with a default value of true

  if (trueOrFalse) {
    task = true;    // Update 'task' to true if 'trueOrFalse' is true
    task2 = false;  // Update 'task2' to false if 'trueOrFalse' is true
  }

  return [task, task2]; // Return an array containing the values of 'task' and 'task2'
}
