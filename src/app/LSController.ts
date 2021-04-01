import { Employee } from "./employee";

export class LSController{

    static addEmployeeToLS(employee:Employee){
        let arr = this.getEmployeesFromLS();
        (arr as Array<Employee>).push(employee);
        localStorage.setItem("employees",JSON.stringify(arr));
    }

    static deleteEmployeesFromLS(empID:Number){
        let arr = this.getEmployeesFromLS();
        (arr as Array<Employee>).forEach((employee:Employee, index) => {
            if(employee.id == empID){
                (arr as Array<Employee>).splice(index,1);
            }
        });
        localStorage.setItem("employees",JSON.stringify(arr));
        this.setEmployeeIndexes();
    }

    static setEmployeeIndexes(){
        let arr = this.getEmployeesFromLS();
        (arr as Array<Employee>).forEach((employee:Employee,index) => {
            employee.id = index + 1;
        });
        localStorage.setItem("employees",JSON.stringify(arr));
    }

    static getEmployeesFromLS(){
        let arr;
        if(localStorage.getItem("employees") != null){
            arr = JSON.parse((localStorage.getItem("employees") as string));
        }else{
            arr = [];
        }
        return arr;
    }

    
}