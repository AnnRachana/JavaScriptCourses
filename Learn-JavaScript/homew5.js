
// 1..
let numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.splice(9)
console.log(numbers)

// 2..
let colors = ['blue','green','yellow','red']
colors.splice(0,1,'black')
colors.splice(2,1,'pink')
console.log(colors)

// 3..
let works = ['I','Love','Cambodia']
let sentence =works.join(' ')
console.log(sentence)

//4...
let name='Rachana'
console.log(typeof(name))


//5...
let number = [1,2,3,2,4,5,3,1,4,9,8,1]
let length=number.length
console.log(length)

//6...
let shapes = ['circle','square','traingle','rectangle']
shapes.splice(3,1,'oval')
console.log(shapes)

//7...
let num = [1,2,3,4,5]
let extra=[6,7,8,9,10]
let updateIterm = num.concat(extra)
console.log(updateIterm)
console.log(num.indexOf(3))
