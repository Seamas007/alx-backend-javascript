// 5-typed_arrays.js

function createInt8TypedArray(length, position, value) {
  // Create a new ArrayBuffer with the specified length
  const buffer = new ArrayBuffer(length);

  // Check if the position is within the range of the buffer
  if (position < 0 || position >= length) {
    throw new Error("Position outside range");
  }

  // Create a DataView to access and manipulate the buffer
  const dataView = new DataView(buffer);

  // Set the Int8 value at the specified position
  dataView.setInt8(position, value);

  return dataView; // Return the DataView containing the modified buffer
}

export default createInt8TypedArray;
