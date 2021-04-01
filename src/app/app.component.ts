import { Component } from '@angular/core';
import { LSController } from './LSController';
import { Employee } from "./employee";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  getItems(){
    return LSController.getEmployeesFromLS();
  }

  addEmployee(name:string,surname:string,department:string){
    let emp = new Employee(name,surname,department);
    LSController.addEmployeeToLS(emp);
  }

  deleteEmployee(empID:any){
    LSController.deleteEmployeesFromLS(empID);
  }

}
