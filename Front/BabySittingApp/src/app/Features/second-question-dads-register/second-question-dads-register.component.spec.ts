import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondQuestionDadsRegisterComponent } from './second-question-dads-register.component';

describe('SecondQuestionDadsRegisterComponent', () => {
  let component: SecondQuestionDadsRegisterComponent;
  let fixture: ComponentFixture<SecondQuestionDadsRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondQuestionDadsRegisterComponent]
    });
    fixture = TestBed.createComponent(SecondQuestionDadsRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
