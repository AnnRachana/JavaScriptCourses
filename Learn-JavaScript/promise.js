const promise = new Promise((resolve, reject)=>{
    resolve(12)
})
console.log(promise)
promise.then((val)=>{
    console.log(val + 10)
    return val + 10
})
.then((val)=>{
    console.log(val + 20 )
})
.catch((error)=>{
    console.error(error)
})