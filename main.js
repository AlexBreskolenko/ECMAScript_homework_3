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

// ****************************Task 2
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Order {
  constructor(orderNumber) {
    // число,уникальный номер заказа
    this.orderNumber = orderNumber;
    //массив, содержащий список продуктов в заказе.
    this.product = [];
    // для общей стоимости
    this.totalCost = 0;
  }
  //принимает объект product и добавляет его в список продуктов заказа.
  addProduct(product) {
    this.totalCost += product.price;
    this.product.push({ product });
  }
  getTotalPrice() {
    return this.totalCost;
  }
}

const order = new Order(12345);
const product1 = new Product("Phone", 500);
order.addProduct(product1);
const product2 = new Product("Headphones", 100);
order.addProduct(product2);
console.log(order.getTotalPrice());
const product3 = new Product("Ball", 300);
order.addProduct(product3);
console.log(order.getTotalPrice());
