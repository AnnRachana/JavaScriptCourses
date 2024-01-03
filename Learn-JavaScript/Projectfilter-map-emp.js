const employer = [
    { name: "John", department: "Sales", salary: 50000 },
    { name: "Jane", department: "Marketing", salary: 60000 },
    { name: "Bob", department: "IT", salary: 80000 },
    { name: "Alice", department: "Marketing", salary: 70000 },
    { name: "Charlie", department: "IT", salary: 75000 },
    { name: "David", department: "Sales", salary: 55000 },
    { name: "Eric", department: "Human Resources", salary: 45000 },
    { name: "Frank", department: "Finance", salary: 65000 },
    { name: "Gina", department: "IT", salary: 90000 },
    { name: "Harry", department: "Marketing", salary: 63000 },
    { name: "Irene", department: "Sales", salary: 58000 },
    { name: "Jack", department: "Human Resources", salary: 42000 },
    { name: "Kimberly", department: "Finance", salary: 75000 },
    { name: "Liam", department: "IT", salary: 80000 },
    { name: "Megan", department: "Marketing", salary: 70000 },
    { name: "Nathan", department: "Sales", salary: 56000 },
    { name: "Olivia", department: "Human Resources", salary: 48000 },
    { name: "Patrick", department: "Finance", salary: 67000 },
    { name: "Quinn", department: "IT", salary: 92000 },
    { name: "Rachel", department: "Marketing", salary: 64000 }
];
console.log('----------BIGGEST----------')
let Biggests = employer.filter((item) => item.salary >= 50000)
console.log(Biggests)
Biggests.map((item)=>{
    console.log('Name: '+item.name+', Department: '+item.department+', Salary: '+item.salary)
})
console.log('----------LOWWEST----------')
let Lowwest = employer.filter((item) => item.salary <= 50000)
console.log(Lowwest)
Lowwest.map((item)=>{
    console.log('Name: '+item.name+', Department: '+item.department+', Salary: '+item.salary)
})
// console.log('Name: ${item.name} ');