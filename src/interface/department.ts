import Employee from "./employee";

export default interface Department {
    department: string;
    average_salary: number;
    total_year_of_service: number;
    employee: Employee[];
    richest_employee: Employee | null;
}