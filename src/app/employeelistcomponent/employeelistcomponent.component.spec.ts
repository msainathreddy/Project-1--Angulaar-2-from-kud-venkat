import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeelistcomponentComponent } from './employeelistcomponent.component';

describe('EmployeelistcomponentComponent', () => {
  let component: EmployeelistcomponentComponent;
  let fixture: ComponentFixture<EmployeelistcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeelistcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeelistcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
