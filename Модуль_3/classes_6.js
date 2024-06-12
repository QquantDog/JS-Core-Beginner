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
let e = new Employee("max", 200);
let m1 = new Manager("oleg", 200, "OTDEL_1");
let m2 = new Manager("vitya", 250, "OTDEL_2");

console.log(e.getAnnualSalary());
console.log(m1.getAnnualSalary());
console.log(m2.getAnnualSalary());
