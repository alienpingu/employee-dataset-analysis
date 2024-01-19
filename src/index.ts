import Core from "./model/core";
import {dataset} from "./data/dataset";

const core = new Core(dataset)

core.departments.forEach(department => {
    console.log("Department: ", department.name);
    console.log("Experience: ", department.total_year_of_service);
    console.log("Richest: ", department.richest_employee?.name);
    console.log('---');
})

