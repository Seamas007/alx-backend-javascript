/**
 * Function to create a report object from a given employees list.
 * The report object contains the employees list and provides a method to get the number of departments.
 * @param {Object} employeesList - The list of employees categorized by department.
 * @returns {Object} - The report object.
 */
export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList, // Store the employees list in the report object

    /**
     * Method to get the number of departments in the employees list.
     * @param {Object} employeesList - The list of employees categorized by department.
     * @returns {number} - The number of departments.
     */
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length; // Return the length of the keys in the employees list
    },
  };
}
