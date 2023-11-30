import Core from "./model/core";
import {dataset} from "./data/dataset";

const core = new Core(dataset)

core.averageSalary().forEach(row => console.log("Avarange Salary of "+row.average+" for "+row.department+" department"))
core.yearsOfService().forEach(row => console.log("A total of "+row.experience+" years of experience for "+row.department+" department"))


