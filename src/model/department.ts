import Employee from "../interface/employee";

export default class Department {
    name: string;
    employee:  Employee[];
    average_salary:  number;   
    total_year_of_service: number;
    richest_employee: Employee;

    constructor(name: string, employee: Employee[]) {
        this.name = name;
        this.employee = employee;
        this.average_salary = this.generateSalary();
        this.total_year_of_service = this.generateYear();
        this.richest_employee = this.getRichest();

    }

    generateSalary = () => this.employee.reduce((sum, employee) => sum + employee.salary, 0) / this.employee.length;

    generateYear = () => this.employee.reduce((sum, employee) => sum + employee.experience, 0);

    getRichest = () => this.employee.reduce((maxSalaryEmployee, currentEmployee) => currentEmployee.salary > maxSalaryEmployee.salary ? currentEmployee : maxSalaryEmployee, this.employee[0]);
}