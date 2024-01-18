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
})