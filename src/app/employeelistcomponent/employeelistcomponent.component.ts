import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';
import { UserPreference } from './userPreference.service';



@Component({
  selector: 'list-employee',
  templateUrl: './employeelistcomponent.component.html',
  styleUrls: ['./employeelistcomponent.component.css'],


})
export class EmployeelistcomponentComponent implements OnInit {

  employees: IEmployee[];
  selectedemployeecountradiobutton: string = 'all';
  statusMessage: string = 'Loading Data Pleease wait...';

  constructor(private _employeeservice: EmployeeService, private userpreference:UserPreference) {
    console.log("first");
  }
  ngOnInit() {
    console.log("second");
    this._employeeservice.getEmployees()
    .subscribe(data => this.employees = data, error => {
      this.statusMessage = 'Problem with the service. Please try after some time';
      console.error(error);
    });
   }
  get colour():string{
    return this.userpreference.colorPreference;
  }
  set colour(value:string){
    this.userpreference.colorPreference=value;
  }

  onSelectedEmployeecountRadioButton(selectedradiobuttonvalue: string): void {
    this.selectedemployeecountradiobutton = selectedradiobuttonvalue;
  }

  // constructor() {
  //   this.employees = [
  //     { code: 'emp101', name: 'Tom Jenkins', gender: 'male', annualsalary: 10, dateofbirth: '11/11/1997' },
  //     { code: 'emp102', name: 'Mathew Harry', gender: 'male', annualsalary: 1000, dateofbirth: '12/12/1997' },
  //     { code: 'emp103', name: 'Adam Han', gender: 'male', annualsalary: 10000, dateofbirth: '10/12/1998' },
  //     { code: 'emp104', name: 'Jennifer', gender: 'female', annualsalary: 1000000, dateofbirth: '12/12/1996' },
  //     { code: 'emp105', name: 'Lawrence', gender: 'female', annualsalary: 100000000, dateofbirth: '08/12/1990' },
  //     { code: 'emp106', name: 'Smith silly', gender: 'female', annualsalary: 100000000, dateofbirth: '08/12/1990' }
  //   ]
  // }


  // getEmployees(): void {
  //   this.employees = [
  //     { code: 'emp101', name: 'Tom Jenkins', gender: 'male', annualsalary: 10, dateofbirth: '11/11/1997' },
  //     { code: 'emp101', name: 'Mathew Harry', gender: 'male', annualsalary: 1000, dateofbirth: '12/12/1997' },
  //     { code: 'emp103', name: 'Adam Han', gender: 'male', annualsalary: 10000, dateofbirth: '10/12/1998' },
  //     { code: 'emp104', name: 'Jennifer', gender: 'female', annualsalary: 1000000, dateofbirth: '12/12/1996' },
  //     { code: 'emp105', name: 'Lawrence', gender: 'female', annualsalary: 100000000, dateofbirth: '08/12/1990' }
  //   ]
  // }
  trackByEmpcode(index: number, employee: any) {
    return employee.code;
  }

  gettotalempcount(): number {
    return this.employees.length;
  }

  gettotalmalecount(): number {
    return this.employees.filter(e => e.gender === 'male').length;
  }

  gettotalfemalecount(): number {
    return this.employees.filter(e => e.gender === 'female').length;
  }



}
