import { Component, OnInit } from '@angular/core';
import { UserPreference } from '../employeelistcomponent/userPreference.service';

@Component({
  selector: 'app-homecomponent',
  templateUrl: './homecomponent.component.html',
  styleUrls: ['./homecomponent.component.css']
})
export class Homecomponent implements OnInit {

  constructor(private userprefernce:UserPreference) {

   }
  get colour():string{
    return this.userprefernce.colorPreference;
  }
  set colour(value:string){
     this.userprefernce.colorPreference='value';
  }
  ngOnInit(): void {
  }

}
