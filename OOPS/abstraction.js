class Employee {
    constructor(name, position) {
        this.name = name;
        this.position = position;
    }

    displayDetails() {
        throw new Error('Method not implemented');
    }
}

class Developer extends Employee {
    constructor(name, position, language) {
        super(name, position);
        this.language = language;
    }


    displayDetails() {
        console.log(`Name: ${this.name}, Position: ${this.position}, Language: ${this.language}`);
    }
}

let dev1 = new Developer('sneha', 'junior Developer', 'JavaScript');


dev1.displayDetails(); 