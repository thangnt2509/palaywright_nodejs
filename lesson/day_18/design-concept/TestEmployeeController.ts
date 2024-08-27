import { Contractor } from "./Contractor";
import { Employee } from "./Employee";
import EmployeeController from "./EmployeeManagement";
import { FulltimeEmployee } from "./FulltimeEmployee";
import { ParttimeEmployee } from "./ParttimeEmployee";

//Controller
let employeeController: EmployeeController = new EmployeeController();

//Create data
let teo: Employee = new FulltimeEmployee();
let ti: Employee = new Contractor();
let tun: Employee = new ParttimeEmployee();

//Using controller to process data
let totalSalary = employeeController.getTotalSalary([teo, ti, tun]);
console.log('Total salary: ' + totalSalary); // 15000