import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeByTitleComponent } from './employee-by-title.component';

describe('EmployeeByTitleComponent', () => {
  let component: EmployeeByTitleComponent;
  let fixture: ComponentFixture<EmployeeByTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeByTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeByTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
