import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'employee-count',
  templateUrl: './employeecount.component.html',
  styleUrls: ['./employeecount.component.css']
})
export class EmployeecountComponent implements OnInit {
  @Input()
  all: number

  @Input()
  male:number
  
  @Input()
  female:number  

  selectedradiobuttonvalue:string = 'All';
  
  @Output()
  countRadioButtonSelectionchange: EventEmitter<string> = new EventEmitter<string>();
 
  onRadioButtonSelectionchange(){
    this.countRadioButtonSelectionchange.emit(this.selectedradiobuttonvalue);
    console.log("*****"+this.selectedradiobuttonvalue);
  }
  constructor() { }
  ngOnInit(): void {
  }

}
