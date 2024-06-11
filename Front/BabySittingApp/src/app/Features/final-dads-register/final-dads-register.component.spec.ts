import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalDadsRegisterComponent } from './final-dads-register.component';

describe('FinalDadsRegisterComponent', () => {
  let component: FinalDadsRegisterComponent;
  let fixture: ComponentFixture<FinalDadsRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinalDadsRegisterComponent]
    });
    fixture = TestBed.createComponent(FinalDadsRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
