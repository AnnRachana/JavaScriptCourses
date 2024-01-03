const cheakAge = (age) => {
    return new Promise((resovle,reject)=>{
        if(age>=18){
            resovle(' u are legal to drink')
        }else{
            reject('sorry, u are not old enough')
        }
    })
    .then((response)=>{
        console.log(response)
    })
    .catch((error)=>{
        console.error(error)
    })
}
console.log(cheakAge(17))