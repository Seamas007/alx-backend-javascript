// 3-get_ids_sum.js

function getStudentIdsSum(students) {
  // Use the reduce function to calculate the sum of student ids
  const sum = students.reduce((accumulator, student) => accumulator + student.id, 0);

  return sum; // Return the sum of student ids
}

export default getStudentIdsSum;
