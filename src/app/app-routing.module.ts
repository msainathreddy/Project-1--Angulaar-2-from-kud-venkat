import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Homecomponent } from './homecomponent/homecomponent.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeelistcomponentComponent } from './employeelistcomponent/employeelistcomponent.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeContactComponent } from './employee-contact/employee-contact.component';
import { EmployeeOverviewComponent } from './employee-overview/employee-overview.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Homecomponent },
  { path: 'employees', component: EmployeelistcomponentComponent },
  {
    path: 'employees/:code',
    component: EmployeeComponent,
    children: [
      { path: 'contact', component: EmployeeContactComponent },
      { path: 'overview', component: EmployeeOverviewComponent }
    ]
  },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingcomponents = [Homecomponent, EmployeelistcomponentComponent, PageNotFoundComponent, EmployeeComponent, EmployeeContactComponent, EmployeeOverviewComponent]
