import { Injectable } from '@angular/core'

@Injectable()
export class UserPreference {
    constructor(){
        console.log("Service Instance is called");
    }
    colorPreference: string = 'yellow';

}