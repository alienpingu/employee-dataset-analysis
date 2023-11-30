import Employee from "../interface/employee";

export default class Core {
    dataset: Employee[];
    departments: string[];

    constructor(datasetFromParent: Employee[]) {
        this.dataset = datasetFromParent;
        this.departments = [...new Set(this.dataset.map(employee => employee.department))];
    }

    getAllFromDepartment = (department:string):Employee[] => this.dataset.filter(eployee => eployee.department === department) 

    averageSalaryForDepartment = (department:string) => {
        const departmentEmployee: Employee[] = this.getAllFromDepartment(department);
        const salaryTotal = departmentEmployee
            .map((eployee) => eployee.salary)
            .reduce((acc,curr) => acc + curr, 0);
        const average = salaryTotal / departmentEmployee.length;
        return average;
    }

    highestSalary = () => {
        let highest: Employee | undefined;
        this.dataset.forEach((employee) => (!highest || employee.salary > highest.salary) ? highest = employee : null);
        return highest;
    }

    yearsOfServiceOfDepartment = (department:string) => 
        this.getAllFromDepartment(department)
            .map((eployee) => eployee.experience)
            .reduce((acc,curr) => acc + curr, 0);


    averageSalary = () => this.departments.map(department => ({
        department,
        average: this.averageSalaryForDepartment(department)
      }));
    yearsOfService = () => this.departments.map(department => ({
        department,
        experience: this.yearsOfServiceOfDepartment(department)
      }));

}