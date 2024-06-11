import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdQuestionDadsRegisterComponent } from './third-question-dads-register.component';

describe('ThirdQuestionDadsRegisterComponent', () => {
  let component: ThirdQuestionDadsRegisterComponent;
  let fixture: ComponentFixture<ThirdQuestionDadsRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThirdQuestionDadsRegisterComponent]
    });
    fixture = TestBed.createComponent(ThirdQuestionDadsRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
