import { Employee } from "./Employee";

export class FulltimeEmployee extends Employee{
    constructor(){
        super(10000);
    }

    printSalary(){
        console.log(`Fulltime Employee Salary: ${this.getSalary()}`);
    }
}