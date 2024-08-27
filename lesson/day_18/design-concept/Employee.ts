export class Employee{
    //Property definition
    protected salary: number;

    constructor(salary: number){
        this.salary = salary;
    }

    //Setter
    setSalary(salary: number){
        this.salary = salary;
    }

    //Getter
    getSalary(): number{
        return this.salary;
    }
}