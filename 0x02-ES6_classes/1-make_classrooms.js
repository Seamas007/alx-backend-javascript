import ClassRoom from './0-classroom.js';

/**
 * Initializes an array of ClassRoom objects with given sizes.
 * @returns {Array} - Array of ClassRoom objects.
 */
function initializeRooms() {
  const room1 = new ClassRoom(19); // Create a ClassRoom object with size 19
  const room2 = new ClassRoom(20); // Create a ClassRoom object with size 20
  const room3 = new ClassRoom(34); // Create a ClassRoom object with size 34
  
  return [room1, room2, room3]; // Return an array of ClassRoom objects
}

export default initializeRooms;
