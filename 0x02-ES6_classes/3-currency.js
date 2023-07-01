export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // Getter for code attribute
  get code() {
    return this._code;
  }

  // Setter for code attribute
  set code(newCode) {
    this._code = newCode;
  }

  // Getter for name attribute
  get name() {
    return this._name;
  }

  // Setter for name attribute
  set name(newName) {
    this._name = newName;
  }

  // Method to display full currency format
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
