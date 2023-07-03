// 7-has_array_values.js

function hasValuesFromArray(set, arr) {
  // Check if all elements in the array exist within the set
  const hasAllValues = arr.every((element) => set.has(element));

  return hasAllValues; // Return the boolean result
}

export default hasValuesFromArray;
