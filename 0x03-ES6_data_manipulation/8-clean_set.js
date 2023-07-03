// 8-clean_set.js

function cleanSet(set, startString) {
  // Filter the set values that start with the specified string
  const filteredValues = [...set].filter((value) => value.startsWith(startString));

  // Extract the rest of the string after the startString and join them with "-"
  const cleanedString = filteredValues.map((value) => value.slice(startString.length)).join("-");

  return cleanedString; // Return the resulting string
}

export default cleanSet;
