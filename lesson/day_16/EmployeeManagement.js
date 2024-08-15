//Create data 
const Employee = require("./Employee");
const SalaryController = require("./SalaryController");

//user-defined data - Model
let teo = new Employee(-8000);
let ti = new Employee(10000);

//Init controller, call controller to process data
let salaryController = new SalaryController();
const totalSalary = salaryController.getTotalSalary([teo, ti]);
console.log(`Total salary: ${totalSalary}`); //18000