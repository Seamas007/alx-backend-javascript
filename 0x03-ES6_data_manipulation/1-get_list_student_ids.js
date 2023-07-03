// 1-get_list_student_ids.js

function getListStudentIds(students) {
  // Check if the argument is an array
  if (!Array.isArray(students)) {
    return []; // Return an empty array if the argument is not an array
  }

  // Map the array of objects and extract the id property from each object
  const ids = students.map((student) => student.id);

  return ids; // Return the array of ids
}

export default getListStudentIds;
