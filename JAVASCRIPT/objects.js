//objects 
//key:value pair

//declaration
//1.
let student_detail = {
    id:1,               
    name:"sneha",
    phoneno:1234567890,
    clubs : ["chess","throwball"],
    marks : {
        english:100,
        maths:95,
        physics:80,
        chemistry:75,
        biology:97
    }
}

console.log(student_detail)
console.log(student_detail.clubs[0])
console.log(student_detail.marks.english)

//2.
let project_details = new Object()
project_details.name = "food delivery"
project_details.id = 1

console.log(project_details)
console.log(project_details.name) //to retrieve particular data
project_details.id=2 //change data
console.log(project_details.id)
project_details.price = 25000 //to add property
console.log(project_details)

//square bracket notation
//used in cases where we have to access the property with another name
//eg
let proj_id="id"
console.log(project_details[proj_id])
console.log(project_details["name"])

let shopping = {
    item:"dress",
    price:2000,
    //function inside object
    buy : function(){
        console.log("add to cart")
    },
    addToWishList() {
        console.log("added to wish list")
    }
}
shopping.buy()
shopping.addToWishList()


