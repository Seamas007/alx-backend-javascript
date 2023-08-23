const http = require('http');
const fs = require('fs');

const path = process.argv[2];
const port = 1245;

const countStudents = (path) => {
  const promise = (resolve, reject) => {
    fs.readFile(path, 'utf8', (err, resData) => {
      if (!err) {
        const printOut = [];
        let printItem; // item to be printed
        const data = resData.toString().split('\n');
        let students = data.filter((item) => item);
        students = students.map((item) => item.split(','));
        printItem = `Number of students: ${students.length - 1}`;
        console.log(printItem);
        printOut.push(printItem);

        const fields = {};
        for (const student in students) {
          if (student !== 0) {
            if (!fields[students[student][3]]) {
              fields[students[student][3]] = [];
            }
            fields[students[student][3]].push(students[student][0]);
          }
        }

        for (const key of Object.keys(fields)) {
          printItem = `Number of students in ${key}: ${
            fields[key].length
          }. List: ${fields[key].join(', ')}`;
          console.log(printItem);
          printOut.push(printItem);
        }
        resolve(printOut);
      } else {
        reject(new Error('Cannot load the database'));
      }
    });
  };

  return new Promise(promise);
};

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  }
  if (req.url === '/students') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    countStudents(path)
      .then((data) => {
        res.end(`This is the list of our students\n${data.join('\n')}`);
      })
      .catch((error) => {
        res.statusCode = 500; // Internal Server Error
        res.end(error.message);
      });
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;
