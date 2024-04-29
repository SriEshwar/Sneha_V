console.log("hello")
console.log(global)



console.log(__dirname)
console.log(__filename)

const operation=require('./math')
console.log(operation.add(5,5))
console.log(operation.sub(5,5))
console.log(operation.mul(5,5))
console.log(operation.div(5,5))

//--- another wayof importing functions ---
//destructure function directly
/*
const {add, sub, mul, div} = require('./math')
console.log(add(5,5))
*/

