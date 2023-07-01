class HolbertonCourse {
  constructor(name, length, students) {
    this._name = "";
    this._length = 0;
    this._students = [];

    this.name = name;
    this.length = length;
    this.students = students;
  }

  // Getter and Setter for name
  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== "string") {
      throw new TypeError("Name must be a string");
    }
    this._name = value;
  }

  // Getter and Setter for length
  get length() {
    return this._length;
  }

  set length(value) {
    if (typeof value !== "number") {
      throw new TypeError("Length must be a number");
    }
    this._length = value;
  }

  // Getter and Setter for students
  get students() {
    return this._students;
  }

  set students(value) {
    if (!Array.isArray(value)) {
      throw new TypeError("Students must be an array");
    }
    this._students = value;
  }
}

export default HolbertonCourse;
