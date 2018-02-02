import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeByRegionComponent } from './employee-by-region.component';

describe('EmployeeByRegionComponent', () => {
  let component: EmployeeByRegionComponent;
  let fixture: ComponentFixture<EmployeeByRegionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeByRegionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeByRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
