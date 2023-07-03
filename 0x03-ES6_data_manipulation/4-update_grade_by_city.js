// 4-update_grade_by_city.js

function updateStudentGradeByCity(students, city, newGrades) {
  // Filter the array of students based on the specified city
  const filteredStudents = students.filter((student) => student.location === city);

  // Map over the filtered students and update their grades
  const updatedStudents = filteredStudents.map((student) => {
    // Find the corresponding grade object for the student
    const gradeObj = newGrades.find((grade) => grade.studentId === student.id);

    // If a grade object is found, assign the grade to the student, otherwise assign "N/A"
    const grade = gradeObj ? gradeObj.grade : "N/A";

    // Return the updated student object with the new grade
    return { ...student, grade };
  });

  return updatedStudents; // Return the array of updated students
}

export default updateStudentGradeByCity;
