import Employee from "../interface/employee";
import Department from "../interface/department";
export default class Core {
    dataset: Employee[];
    departments: Department[];

    constructor(datasetFromParent: Employee[]) {
        this.dataset = datasetFromParent;
        this.departments = this.generateDepartments();
        this.generateEmployee();
        this.generateSalary();
        this.generateYear();
        this.getRichest();
    }

    generateDepartments = ():Department[] => {
        const initialDepartments = [...new Set(this.dataset.map(employee => {
            const department:Department = {
                department: employee.department,
                average_salary: 0,
                total_year_of_service: 0,
                employee: [],
                richest_employee: null
            }
            return department;
        }))];
        let uniqueDepartments = new Set();
        const uniqueArray = initialDepartments.filter(obj => {
            const isUnique = !uniqueDepartments.has(obj.department);
            uniqueDepartments.add(obj.department);
            return isUnique;
        });
        return uniqueArray;
    }

    generateEmployee = () => {
        this.departments.forEach((department, index) => {
            this.departments[index].employee = this.dataset.filter(employee => employee.department === department.department);
        })  
    } 

    generateSalary = () => {
        this.departments.forEach((department, index) => {
            const totalSalary = department.employee.reduce((sum, employee) => sum + employee.salary, 0);
            const averageSalary = totalSalary / department.employee.length;
            this.departments[index].average_salary = averageSalary;
        })
    }

    generateYear = () => {
        this.departments.forEach((department, index) => {
            const totalExperience = department.employee.reduce((sum, employee) => sum + employee.experience, 0);
            this.departments[index].total_year_of_service = totalExperience;
        })
    }

    getRichest = () => {
        this.departments.forEach((department, index) => {
            const employeeWithMaxSalary = department.employee.reduce((maxSalaryEmployee, currentEmployee) => {
                return currentEmployee.salary > maxSalaryEmployee.salary ? currentEmployee : maxSalaryEmployee;
              }, department.employee[0]);
            this.departments[index].richest_employee = employeeWithMaxSalary;
        })
    }
}