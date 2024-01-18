import Core from "./model/core";
import {dataset} from "./data/dataset";

const core = new Core(dataset)
console.log(core.departments);
console.log(core.departments[0].employee);

