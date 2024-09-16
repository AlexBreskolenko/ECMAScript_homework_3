// **********************Task 1
// Класс для сотрудника
class Employee {
  constructor(name) {
    // Свойство имя сотрудника
    this.name = name;
  }
  // Метод для вывода имя сотрудника
  displayInfo() {
    console.log(`Name : ${this.name}`);
  }
}

// Класс менеджер,наследует класс Employee
class Manager extends Employee {
  constructor(name, department) {
    super(name);
    this.department = department;
  }
  displayInfo() {
    console.log(`Name: ${this.name}\nDepartment: ${this.department}`);
  }
}

const employee = new Employee("John Smith");
employee.displayInfo();

const manager = new Manager("Jone Doe", "Sales");
manager.displayInfo();
