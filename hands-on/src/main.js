class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const students = [
  new Student('Alvin', 20),
  new Student('Bob', 21),
  new Student('Clara', 20),
];

function generateTable() {
  const table = document.querySelector('table');
  // Terima kasih, A. Tangguh Wisesa.
  students.map((student) => {
    table.insertRow().innerHTML = `<td>${student.name}</td><td>${student.age}</td>`;
  });
}

function calculateAverageAge(acc, { age = 20 }) {
  return acc + age;
}

function getAverageAge(students) {
  const totalAge = students.reduce(calculateAverageAge, 0);
  return totalAge / students.length;
}

document.getElementById('getAverageButton').addEventListener('click', () => {
  document.getElementById('averageText').innerHTML = getAverageAge(students);
});

generateTable();
