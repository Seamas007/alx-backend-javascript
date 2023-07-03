// 2-get_students_by_loc.js

function getStudentsByLocation(students, city) {
  // Filter the array of students based on the specified city
  const filteredStudents = students.filter((student) => student.location === city);

  return filteredStudents; // Return the array of filtered students
}

export default getStudentsByLocation;
