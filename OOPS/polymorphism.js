//polymorphism.js
class Employee {
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }

    
    displayDetails() {
        console.log(`${this.name} - ${this.role}`);
    }
}

class Manager extends Employee {
    constructor(name) {
        super(name, 'Manager');
    }
}

class Developer extends Employee {
    constructor(name) {
        super(name, 'Developer');
    }
}


let emp1 = new Manager('ram');
let emp2 = new Developer('shalu');

emp1.displayDetails(); 
emp2.displayDetails(); 

