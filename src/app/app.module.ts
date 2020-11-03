import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http' ;
import { AppRoutingModule, routingcomponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {EmployeeComponent} from './employee/employee.component';
import { EmployeelistcomponentComponent } from './employeelistcomponent/employeelistcomponent.component';
import { EmployeeTitlePipe} from './employeelistcomponent/employeeTitle.Pipe';
import { EmployeecountComponent } from './employeecount/employeecount.component';
import { EmployeeService } from './employeelistcomponent/employee.service';
import { UserPreference } from './employeelistcomponent/userPreference.service';








@NgModule({
  declarations: [
    AppComponent,EmployeeComponent, EmployeelistcomponentComponent, EmployeeTitlePipe, EmployeecountComponent, routingcomponents
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule, HttpClientModule
  ],
  providers: [EmployeeService, UserPreference],
  bootstrap: [AppComponent]
})
export class AppModule { }
