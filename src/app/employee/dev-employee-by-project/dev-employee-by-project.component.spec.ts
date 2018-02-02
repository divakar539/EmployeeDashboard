import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevEmployeeByProjectComponent } from './dev-employee-by-project.component';

describe('DevEmployeeByProjectComponent', () => {
  let component: DevEmployeeByProjectComponent;
  let fixture: ComponentFixture<DevEmployeeByProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevEmployeeByProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevEmployeeByProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
