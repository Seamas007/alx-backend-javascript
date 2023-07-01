export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  // Getter and setter for the 'size' attribute
  get size() {
    return this._size;
  }

  set size(value) {
    this._size = value;
  }

  // Getter and setter for the 'location' attribute
  get location() {
    return this._location;
  }

  set location(value) {
    this._location = value;
  }

  // Custom conversion behavior using Symbol.toPrimitive
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      // Return 'size' when cast to a number
      return this.size;
    }
    if (hint === 'string') {
      // Return 'location' when cast to a string
      return this.location;
    }
    // Return the class instance itself for other hints
    return this;
  }
}
