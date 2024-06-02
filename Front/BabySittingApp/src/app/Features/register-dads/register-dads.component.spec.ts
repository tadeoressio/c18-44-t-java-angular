import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterDadsComponent } from './register-dads.component';

describe('RegisterDadsComponent', () => {
  let component: RegisterDadsComponent;
  let fixture: ComponentFixture<RegisterDadsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterDadsComponent]
    });
    fixture = TestBed.createComponent(RegisterDadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
