var Employee = /** @class */ (function () {
    function Employee(name, age) {
        this.name = '';
        this.age = 0;
        this.name = name;
        this.age = age;
    }
    Employee.prototype.greeting = function () {
        return "Hello my name is " + this.name + " and I am " + this.age + " years old.";
    };
    return Employee;
}());
var piri = new Employee("Kiss Piroska", 22);
var greet = piri.greeting();
document.body.innerHTML = greet;
