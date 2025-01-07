const students = [
  {
    name: "Ankit",
    age: 22,
    grade: 85,
    email: "ankit@example.com",
    phone: "555-555-5555",
    graduated: true
  },
  {
    name: "Kayla",
    age: 28,
    grade: 92,
    email: "kayla@example.com",
    phone: "555-555-5555",
    graduated: false
  },
  {
    name: "Charina",
    age: 19,
    grade: 89,
    email: "charina@example.com",
    phone: "555-555-5555",
    graduated: true
  },
  {
    name: "Bernard",
    age: 30,
    grade: 75,
    email: "bernard@example.com",
    phone: "555-555-5555",
    graduated: true
  },
  {
    name: "Kevin",
    age: 36,
    grade: 82,
    email: "kevin@example.com",
    phone: "555-555-5555",
    graduated: false
  },
  {
    name: "Hasheem",
    age: 41,
    grade: 82,
    email: "hasheem@example.com",
    phone: "555-555-5555",
    graduated: true
  },
  {
    name: "Erwin",
    age: 34,
    grade: 72,
    email: "erwin@example.com",
    phone: "555-555-5555",
    graduated: true
  },
  {
    name: "Christopher",
    age: 50,
    grade: 86,
    email: "christopher@example.com",
    phone: "555-555-5555",
    graduated: true
  },
  {
    name: "Angela",
    age: 27,
    grade: 80,
    email: "angela@example.com",
    phone: "555-555-5555",
    graduated: true
  },
];

const graduatedStudents = (listOfStudents) => {
  //Implement function
  const result = [];
  for (const student of listOfStudents) {
    const { name, age, grade, email, phone, graduated } = student;
    if (graduated) {
      const str = `${name} has graduated and their diploma will be sent to ${email}.`;
      result.push(str);
    } else {
      const str1 = `${name} has not graduated yet, no diploma will be sent.`;
      result.push(str1);
    }
  }
  return result;
};

//Output
console.log(graduatedStudents(students));
// [
//   ‘Ankit has graduated and their diploma will be sent to [email protected].’,
//   ‘Kayla has not graduated yet, no diploma will be sent.’,
//   ‘Charina has graduated and their diploma will be sent to [email protected].’
// ]