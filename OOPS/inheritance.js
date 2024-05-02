class Employee {
    constructor (name,age,position){
        this.name = name
        this.age = age
        this.position = position
    }

    displayDetails() {
        console.log(`${this.name} ${this.position}`);
    }
}

class Manager extends Employee{
    constructor(name,age,position,department){
        super(name,age,position)
        this.department=department
    }

    displayDetails() {
        console.log(`Name :${this.name} Department: ${this.department} `)
    }
}

let obj = new Manager('sneha',21,'junior developer','Web development')
obj.displayDetails()
