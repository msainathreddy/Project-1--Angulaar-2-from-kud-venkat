import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../employeelistcomponent/employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employeelistcomponent/employee.service';



@Component({
    selector: 'my-emp',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.css']

})

export class EmployeeComponent implements OnInit {
    // name:string ='Sainath Reddy';
    // designation:string ='Software Employee';
    // age:number =22;
    // gender:string = 'male';
    // showDetails:boolean = false;

    // toggle():void{
    //     this.showDetails = !this.showDetails;
    // }
    employee: IEmployee;
    statusMessage: string;
    constructor(private employeeservice: EmployeeService, private activatedroute: ActivatedRoute, private router:Router) {

    }
    onBackButtonclick():void{
        this.router.navigate(['employees']);
    }
    showOverview(){
        console.log("overview"+this.activatedroute);
        this.router.navigate(['overview'], {relativeTo: this.activatedroute});
    }
    showcontact(){
        console.log("contact"+this.activatedroute);
        this.router.navigate(['contact'], {relativeTo: this.activatedroute});
    }
    ngOnInit() {
        let empCode = this.activatedroute.snapshot.paramMap.get('code');
        if(empCode != null){
        this.employeeservice.getEmployeeBycode(empCode).subscribe(  
            data => {
                if (data == null) {
                    this.statusMessage = 'Employee With the Specified Employee code does not exist';
                }
                else {
                    this.employee = data;
                    console.log("###"+data);
                }
            }, error => {
                this.statusMessage = 'Problem with the service Please try after some time';
                console.log(error);
            });
        }
    }

}

