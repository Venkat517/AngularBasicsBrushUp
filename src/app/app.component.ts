import { Component } from '@angular/core';
import { Employee } from '../app/app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basicsangular';
  EmployeeModel: Employee = new Employee();
  EmployeeModels: Array<Employee> = new Array<Employee>();

  addEmployee() {
    console.log('Employee List' + this.EmployeeModel.employeeName)
    this.EmployeeModels.push(this.EmployeeModel);
    this.EmployeeModel = new Employee(); // clear existing data
  }
}
