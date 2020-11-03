import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageHeader:string = 'Welcome Employee';
  imagePath:string = 'https://www.pragimtech.com/wp-content/uploads/2019/02/pargim-logo-1.png';
  firstName:string = 'Tom'
  lastName:string = 'jerry'
  name:string = 'Tom'
  userText:string = 'Sainath'
  getFullName():string {
    return this.firstName +' ' + this.lastName;
  }
  classesToApply:string = 'italicclass boldclass';
  applyBoldclass:boolean = true;
  applyItalicclass:boolean = true;

  applyclasses(){
    let classes ={
        boldclass : this.applyBoldclass,
        italicclass : this.applyItalicclass
    }
    return classes;
  }
}
