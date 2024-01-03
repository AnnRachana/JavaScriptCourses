// Object Manipulation
// .map and .filter
let carModel = { make : '2022', model: 'Luxiz',Color: 'black' }
let carfunction = {
    start: function(){console.log('The car is Ready')},
    stop: function(){console.log('The Car has Stop')}
}

let car = Object.assign({}, carModel,carfunction)

let test ={...carModel, ...carfunction}
test.start()
// console.log(test)

// or how 2
// console.log(car)
// car.start()
// car.stop()
// console.log(car.make)