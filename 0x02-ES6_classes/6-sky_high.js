// Import the Building class from './5-building.js'
import Building from './5-building.js';

// Define the SkyHighBuilding class that extends the Building class
export default class SkyHighBuilding extends Building {
  // Constructor for SkyHighBuilding
  constructor(sqft, floors) {
    super(sqft); // Pass the sqft value to the parent class constructor
    this._floors = floors; // Assign the floors value
  }

  // Getter for floors attribute
  get floors() {
    return this._floors;
  }

  // Override the evacuationWarningMessage method
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors.`;
  }
}
