// 100-weak.js

// Create a new instance of WeakMap
const weakMap = new WeakMap();

// Define the queryAPI function
function queryAPI(endpoint) {
  // Check if the endpoint is already in the weakMap
  if (!weakMap.has(endpoint)) {
    // If not, set the initial count to 1
    weakMap.set(endpoint, 1);
  } else {
    // If yes, increment the count by 1
    const count = weakMap.get(endpoint);
    weakMap.set(endpoint, count + 1);
  }

  // Check if the count is equal to or exceeds 5
  if (weakMap.get(endpoint) >= 5) {
    // If so, throw an error with the message "Endpoint load is high"
    throw new Error('Endpoint load is high');
  }
}

// Export the weakMap and queryAPI function as named exports
export { weakMap, queryAPI };
