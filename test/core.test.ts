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
    describe("Initial Value Declaration", () => {
        const core = new Core(mockData);
        it("Should return the dataset", () => expect(core.dataset).toStrictEqual(mockData))
        it("Should return the dataset", () => expect(core.departments).toStrictEqual(['HR','Marketing']))
    })

    describe("Average salary calculation",() => {
        it("Should calculate the correct average salary for HR department", () => {
            const core = new Core(mockData);
            expect(core.averageSalaryForDepartment('HR')).toBe(1500)
        })
        it("Should calculate the correct average salary for Marketing department", () => {
            const core = new Core(mockData);
            expect(core.averageSalaryForDepartment('Marketing')).toBe(3000)
        })
        it("Should calculate the correct average salary for EACH department", () => {
            const core = new Core(mockData);
            expect(core.averageSalary()).toStrictEqual([
                {
                    department: 'HR',
                    average: 1500
                },
                {
                    department: 'Marketing',
                    average: 3000
                },
            ])
        })
    })
   
    it("Should return the employee with highest salary in the company", () => {
        const core = new Core(mockData);
        expect(core.highestSalary()).toStrictEqual({
            name: 'paolo',
            salary: 3000,
            department: 'Marketing',
            experience: 8
        })    
    });

    it("Should return the total years of service for department", () => {
        const core = new Core(mockData);
        expect(core.yearsOfServiceOfDepartment('HR')).toBe(6) 

    });
    it("Should return the total years of service for each department", () => {
        const core = new Core(mockData);
        expect(core.yearsOfService()).toStrictEqual([
            {
                department: 'HR',
                experience: 6
            },
            {
                department: 'Marketing',
                experience: 8
            }
        ])
    });

})