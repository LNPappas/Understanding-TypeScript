abstract class Department {
  //   name: string;
  //   private readonly id: string;
  private employees: string[] = []; // can't set employees outside class

  //   constructor(n: string, id: string) {
  //     this.name = n;
  //     this.id = id;
  //   }

  constructor(private readonly id: string, public name: string) {}

  describe(this: Department) {
    console.log(`Department ${this.id}: ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log(`# of Employees: ${this.employees.length}`);
    console.log("Employees: ");
    this.employees.map((e) => console.log(e));
  }

  //   undefined instantiated class that must exist in all extended classes.
  abstract notification(): void;
}

console.log("");

// you can only extend 1 class
class AccountingDepartment extends Department {
  notification(): void {
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
  private static instance: ITDepartment;

  private constructor(id: string, private admins: string[]) {
    super(id, "IT");
  }

  static getInstance() {
    if (!ITDepartment.instance) {
      this.instance = new ITDepartment("d2", ["Joan", "Donna"]);
    }
    return this.instance;
  }

  notification(): void {
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
