import Currency from "./3-currency.js";

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // Getter for amount attribute
  get amount() {
    return this._amount;
  }

  // Setter for amount attribute
  set amount(newAmount) {
    this._amount = newAmount;
  }

  // Getter for currency attribute
  get currency() {
    return this._currency;
  }

  // Setter for currency attribute
  set currency(newCurrency) {
    this._currency = newCurrency;
  }

  // Method to display full price format
  displayFullPrice() {
    const { _name, _code } = this._currency;
    return `${this._amount} ${_name} (${_code})`;
  }

  // Static method to convert price based on conversion rate
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
