import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstQuestionRegisterComponent } from './first-question-register.component';

describe('FirstQuestionRegisterComponent', () => {
  let component: FirstQuestionRegisterComponent;
  let fixture: ComponentFixture<FirstQuestionRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstQuestionRegisterComponent]
    });
    fixture = TestBed.createComponent(FirstQuestionRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
