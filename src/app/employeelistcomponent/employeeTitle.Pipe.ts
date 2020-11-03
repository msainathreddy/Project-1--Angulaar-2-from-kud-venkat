
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:'employeetitle' 
})

export class EmployeeTitlePipe implements PipeTransform{
    transform(value:string,gender:string):string{
        console.log('****'+value);
        if(gender.toLowerCase() == 'male'){
            return 'Mr.'+ value;
        }
        else{
            return 'Miss.' + value; 
        }
    }

    // transform(value:string){
    //     console.log('****'+value);
    //     // if(gender.toLowerCase() == 'male'){
    //     //     return 'Mr.'+ value;
    //     // }
    //     // else{
    //     //     return 'Miss.' + value; 
    //     // }
    // }
}