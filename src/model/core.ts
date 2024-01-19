import Employee from "../interface/employee";
import Department from "./department";
export default class Core {
    dataset: Employee[];
    departments: Department[] = [];

    constructor(datasetFromParent: Employee[]) {
        this.dataset = datasetFromParent;
        this.computeDepartments();
    }

    computeEmployee = (datasetFromParent:Employee[], departmentName:string) => datasetFromParent.filter(employee => employee.department === departmentName)

    computeDepartments = () => {
        this.dataset.forEach((employee) => {
            const departmentExists = this.departments.some(department => department.name === employee.department);
            if (!departmentExists) {
              const newDepartment = new Department(employee.department, this.computeEmployee(this.dataset, employee.department));
              this.departments.push(newDepartment);
            }
        });
          
    }

}