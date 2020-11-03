import { Injectable } from '@angular/core'
import { IEmployee } from './employee'
import { HttpClient,HttpErrorResponse} from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/Rx';
import 'rxjs/add/observable/throw';


@Injectable()
export class EmployeeService {
    private url:string = "http://localhost:7001/employeelist/test/employees";
   // private url_1:string = "http://localhost:7001/employeelist/test/employees/" +empcode;
    constructor(private http:HttpClient){
 
    }

    getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.url)
                    .catch(this.handleError); 
                     
}

getEmployeeBycode(empcode:string): Observable<IEmployee>{
    console.log("**empcode"+empcode);
    return this.http.get<IEmployee>("http://localhost:7001/employeelist/test/employees/" + empcode)
                    .catch(this.handleError);
} 
handleError(error:HttpErrorResponse){
    console.error(error);
    return Observable.throw(error);
}

}