class Employee {
    private name: string = '';
    private age: number = 0;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greeting(): string {
        return `Hello my name is ${this.name} and I am ${this.age} years old.`;
    }
}

const piri = new Employee("Kiss Piroska", 22);
const greet = piri.greeting();
document.body.innerHTML = greet;