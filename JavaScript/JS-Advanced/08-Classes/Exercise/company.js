class Company {
 
    constructor() {
        this.departments = {};
    }
 
    addEmployee(name, salary, position, department) {
 
        if (!name || !salary || !position || !department) {
            throw new Error('Invalid input!');
        }
 
        if (salary < 0) {
            throw new Error('Invalid input!');
        }
 
        if (!this.departments.hasOwnProperty(department)) {
            this.departments[department] = {};
        }
 
        this.departments[department][name] = [salary, position];
 
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }
 
    bestDepartment() {
 
        let bestAverageSalary = 0;
        let bestDepartment = '';
        let result = [];
 
        for (let department in this.departments) {
 
            let currentDepartmentAllSalaries = 0;
            let currentAverageSalary = 0;
            
            let departmentArray = Object.entries(this.departments[department]);
 
            for (let employee of departmentArray) {
 
                let currentSalary = employee[1][0];
                currentDepartmentAllSalaries += currentSalary;
            }
 
            currentAverageSalary = currentDepartmentAllSalaries / departmentArray.length;
 
            if (currentAverageSalary > bestAverageSalary) {
 
                bestAverageSalary = currentAverageSalary;
                bestDepartment = department;
            }
        }
 
        result.push(`Best Department is: ${bestDepartment}`);
        result.push(`Average salary: ${bestAverageSalary.toFixed(2)}`);
 
        let sortedArray = Object.entries(this.departments[bestDepartment]).sort((a, b) => {
 
            return b[1][0] - a[1][0] || a[0].localeCompare(b[0]);
        });
 
        for (let employee of sortedArray) {
 
            let name = employee[0];
            let salary = employee[1][0];
            let position = employee[1][1];
 
            result.push(`${name} ${salary} ${position}`);
        }
 
        return result.join('\n');
    }
}
 
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());