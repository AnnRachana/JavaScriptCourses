let students = [
    {name: 'Max', age: 20, grade: 85},
    {name: 'Rac', age: 19, grade: 90},
    {name: 'hana', age: 21, grade: 75},
    {name: 'nin', age: 18, grade: 80},
    {name: 'lai', age: 22, grade: 95}
]
let Result = students.filter((item)=>item.grade>90)
Result.map((items)=>{
    console.log('example : '+items.name+' '+items.grade)
})
console.log('---------------')

let Results = students.filter((item)=>item.grade<90)
Results.map((itemss)=>{
    console.log('example : '+itemss.name+' '+itemss.grade)
})