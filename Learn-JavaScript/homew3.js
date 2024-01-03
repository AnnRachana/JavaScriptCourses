let person = {
    name : 'Rachana',
    age : 20, 
    isStudent : true,
    printPerson: function(){
        console.log('Name : '+ person.name + ','+ ' age : '+ person.age + ','+ ' Student : '+ person.isStudent)
    }
}
let Address =
    {
        street : 'St 146',
        city : 'Phnom Penh',
        state : 'XX',
        zip : '2323'
    }

let hobbies = ['Researching','reading book','coding']


console.log(person.name)
console.log(person.age)
console.log(person.isStudent)

console.log(Address)
console.log(hobbies)
person.printPerson()