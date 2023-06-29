/**
 * Function to create an iterator object from a given report.
 * The iterator object iterates through all employees in the report.
 * @param {Object} report - The report object containing employee data.
 * @returns {Iterator} - Iterator object to iterate through employees.
 */
export default function createIteratorObject(report) {
  return (function* () {
    // Iterate through each department in the report
    for (const department of Object.values(report.allEmployees)) {
      // Iterate through each employee in the department
      for (const employee of department) {
        yield employee; // Yield the current employee
      }
    }
  })();
}
