import regeneratorRuntime from 'regenerator-runtime';

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

const firstPromise = (averageAge) => (new Promise((resolve) => {
  console.log('calculation start');
  setTimeout(() => {
    resolve(`age is ${averageAge}`);
  }, 5000);
}));

const secondPromise = () => (new Promise((resolve) => {
  console.log('second call started');
  setTimeout(() => {
    resolve('second call finished');
  }, 2000);
}));

const thirdPromise = () => (new Promise((resolve) => {
  console.log('third call started');
  setTimeout(() => {
    resolve('third call finished');
  }, 3000);
}));

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

async function getAverageAge(students) {
  const totalAge = students.reduce(calculateAverageAge, 0);
  const totalAverageAge = totalAge / students.length;

  let results = await Promise.all(
    [firstPromise(totalAverageAge), secondPromise(), thirdPromise()],
  );

  console.log(results);

  return totalAverageAge;
}

document.getElementById('getAverageButton').addEventListener('click', () => {
  document.getElementById('averageText').innerHTML = getAverageAge(students);
});

generateTable();
