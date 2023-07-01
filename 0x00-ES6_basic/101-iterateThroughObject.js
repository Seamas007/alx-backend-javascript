// 101-iterateThroughObject.js

/**
 * Iterates through the provided reportWithIterator and returns the names of employees
 * as a string separated by |
 * @param {Iterable} reportWithIterator - Iterator object containing employee data
 * @returns {string} - Names of employees separated by |
 */
export default function iterateThroughObject(reportWithIterator) {
  const employees = [];

  for (const employee of reportWithIterator) {
    employees.push(employee);
  }

  return employees.join(' | ');
}
