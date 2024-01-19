import Core from '../src/model/core';
import Employee from '../src/interface/employee';

const mockData:Employee[]  = [
    {
        name: 'jonny',
        salary: 1000,
        department: 'HR',
        experience: 4
    },
    {
        name: 'Sara',
        salary: 2000,
        department: 'HR',
        experience: 2
    },
    {
        name: 'paolo',
        salary: 3000,
        department: 'Marketing',
        experience: 8
    },
    
]

describe("Core", () => {
    describe("INIT - Initial Value Declaration", () => {
        const core = new Core(mockData);
        it("Should return initial dataset", () => expect(core.dataset).toStrictEqual(mockData))
    })
    describe("generateDepartment - First element must be HR obj", () => {
        const core = new Core(mockData);
        it("Should return name of first department (=HR)", () => expect(core.departments[0].department).toStrictEqual('HR'))
    })
    describe("generateEmployee - Get list from employee by department", () => {
        const core = new Core(mockData);
        it("Should return array of employee", () => expect(core.departments[0].employee.length).toStrictEqual(2))
    })
    describe("generateSalary - Get avarage salary for department", () => {
        const core = new Core(mockData);
        it("Should return avarange salary from department", () => expect(core.departments[0].average_salary).not.toStrictEqual(0))
    })
    describe("generateYear - Get avarage years of service for department", () => {
        const core = new Core(mockData);
        it("Should return avarange salary from department", () => expect(core.departments[0].total_year_of_service).not.toStrictEqual(0))
    })
    describe("getRichest - Get richest employee for department", () => {
        const core = new Core(mockData);
        it("Should return employee with highest salary", () => expect(core.departments[0].richest_employee).not.toStrictEqual(null))
    })
})