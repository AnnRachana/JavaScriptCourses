//1...
// const promise = new Promise((a, b)=>{
//     resolve(2)
// })
// console.log(promise)
//2...
// const LoginPromise = (login,password) => {
//     return new Promise((resovle,reject)=>{
//         if(login==='user'&& password==='admin'){
//             resovle('Login successful')
//         }else{
//             reject('Login Failed')
//         }
//     })
// }
// LoginPromise('user','admin')
// .then((response)=>{
//     console.log(response)
// })
// .catch((error)=>{
//     console.error(error)
// })
//3...
const Car = (objectArray) => {
    return new Promise((resovle,reject)=>{
        if(objectArray.length==0){
            resovle('CheakOut successful. Thank you for your Purchase')
        }else{
            reject('Your Shopping car is empty')
        }
    })
}
Car('')
.then((response)=>{
    console.log(response)
})
.catch((error)=>{
    console.error(error)
})