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


function counter() {
  let seconds = 0;
  setInterval(() => {
    seconds += 1;
    document.getElementById('app').innerHTML = `<p>You have been here for ${seconds} seconds.</p>`;
  }, 1000);
}

counter();
