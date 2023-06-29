export default function createReportObject(employeesList) {
  const allEmployees = {
    ...employeesList,
  };

  const getNumberOfDepartments = () => Object.keys(employeesList).length;

  return {
    allEmployees,
    getNumberOfDepartments,
  };
}
