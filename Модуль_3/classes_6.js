class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    getAnnualSalary() {
        return this.salary * 12;
    }
}

class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
    }
    getAnnualSalary() {
        return super.getAnnualSalary() * 1.5;
    }
}
let e = new Employee("max", 100)
let m = new Manager("oleg", 200, "OTDEL")

console.log(e.getAnnualSalary())
console.log(m.getAnnualSalary());