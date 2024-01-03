//1...
// function greet(){
//     return'Hello Bong Rachana'
// }
// console.log(greet())
//or..
// function greet(name){
//     return 'Hello'+' '+ name
// }
// console.log(greet('Rachana.'))

//2...
// function sum(...num){
//     let total=0;
//     for(let number of num){
//         total+=number;
//     }
//     return total;
// }
// console.log(sum(10,20))
//or
// function sum(a,b){
//     return a+b;
// }
// console.log(sum(10,50))

//3...
// function calculateArea(widt,height){
//     return widt*height;
// }
// console.log(calculateArea(60,20))

//4...
// function CheckAge(age){
//     if(age>18){
//         return'You are old enough to voice'
//     }else{
//         return'You are not enough to voice'
//     }
// }
// console.log(CheckAge(20))

//5...
function checkString(user){
    if(user.length>10){
        return'this is a long string'
    }else{
        return'welcome'
    }
}
let userString = 'Rachana ann'
let alert=checkString(userString)
console.log(alert)