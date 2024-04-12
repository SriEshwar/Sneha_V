var products=["mobilephone","laptop","keychain","dolls","charger"];
products.push("notebook","pen");
products.pop();
products.map((product)=>{
    console.log(product);
})
var numbers=[1,2,3,4,5,6,7,8,9];
numbers.map((num)=>{
    console.log(num);
})
console.log("numbers greater than 5");
let num=numbers.find(index=>index>5);
console.log(num);
