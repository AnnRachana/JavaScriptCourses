let collection =[
    {name: 'Max', age: 19, skin: 'black'},
    {name: 'Mox', age: 29, skin: 'brown'},
    {name: 'Rachana', age: 20, skin: 'white'}
]
let newCar = collection.filter((item)=>item.age >25)
console.log(newCar)