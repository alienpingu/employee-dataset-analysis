import Employee from "../interface/employee";
import Department from "../interface/department";
export default class Core {
    dataset: Employee[];
    departments: Department[];

    constructor(datasetFromParent: Employee[]) {
        this.dataset = datasetFromParent;
        this.departments = this.generateDepartments();
        this.departments.forEach((department, index) => {
            this.departments[index].employee = this.generateEmployee(department);
            this.departments[index].average_salary = this.generateSalary(department)
            this.departments[index].total_year_of_service = this.generateYear(department);
            this.departments[index].richest_employee = this.getRichest(department);
        })
    }

    generateDepartments = ():Department[] => Array.from(new Set(this.dataset.map(employee => ({
        department: employee.department,
        average_salary: 0,
        total_year_of_service: 0,
        employee: [],
        richest_employee: null
    }))), obj => JSON.stringify(obj)).map(str => JSON.parse(str));

    generateEmployee = (department:Department) => this.dataset.filter(employee => employee.department === department.department)

    generateSalary = (department:Department) => department.employee.reduce((sum, employee) => sum + employee.salary, 0) / department.employee.length;

    generateYear = (department:Department) => department.employee.reduce((sum, employee) => sum + employee.experience, 0);

    getRichest = (department:Department) => department.employee.reduce((maxSalaryEmployee, currentEmployee) => currentEmployee.salary > maxSalaryEmployee.salary ? currentEmployee : maxSalaryEmployee, department.employee[0]);
}