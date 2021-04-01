import { LSController } from "./LSController";
export class Employee{
    id:Number;
    constructor(public name:string, public surname:string, public department:string){
        this.id = LSController.getEmployeesFromLS().length + 1;
    }
}