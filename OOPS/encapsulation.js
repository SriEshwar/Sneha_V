class Employee {
    constructor(name, age, position) {
        
        let _name = name;
        let _age = age;
        let _position = position;

      
        this.getName = function() {
            return _name;
        };
        this.getAge = function() {
            return _age;
        };
        this.getPosition = function() {
            return _position;
        };
    }

    
    displayDetails() {
        console.log(`Name: ${this.getName()}, Age: ${this.getAge()}, Position: ${this.getPosition()}`);
    }
}


let emp = new Employee('sneha', 21, 'Software Engineer');


emp.displayDetails(); 


console.log(emp._name);
