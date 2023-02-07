"use strict";
class Department {
    //   constructor(n: string, id: string) {
    //     this.name = n;
    //     this.id = id;
    //   }
    constructor(id, name) {
        this.id = id;
        this.name = name;
        //   name: string;
        //   private readonly id: string;
        this.employees = []; // can't set employees outside class
    }
    describe() {
        console.log(`Department ${this.id}: ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfo() {
        console.log(`# of Employees: ${this.employees.length}`);
        console.log("Employees: ");
        this.employees.map((e) => console.log(e));
    }
}
console.log("");
// you can only extend 1 class
class AccountingDepartment extends Department {
    notification() {
        console.log(`You have created the ${this.name} Department`);
    }
}
const accounting = new AccountingDepartment("d1", "Accounting");
console.log(accounting.notification());
accounting.describe();
accounting.addEmployee("Anna");
accounting.addEmployee("Max");
accounting.printEmployeeInfo();
console.log("");
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
    static getInstance() {
        if (!ITDepartment.instance) {
            this.instance = new ITDepartment("d2", ["Joan", "Donna"]);
        }
        return this.instance;
    }
    notification() {
        console.log(`You have created the ${this.name} Department`);
    }
    printAdmins() {
        console.log(`# of Admins: ${this.admins.length}`);
        console.log("Admins: ");
        this.admins.map((e) => console.log(e));
    }
}
const itDepartment = ITDepartment.getInstance();
console.log(itDepartment.notification());
itDepartment.describe();
itDepartment.addEmployee("Shubam");
itDepartment.addEmployee("Manu");
itDepartment.printEmployeeInfo();
itDepartment.printAdmins();
