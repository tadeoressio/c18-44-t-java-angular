import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirQuestionRegisterBabySittersComponent } from './third-question-register-baby-sitters.component';

describe('ThirQuestionRegisterBabySittersComponent', () => {
  let component: ThirQuestionRegisterBabySittersComponent;
  let fixture: ComponentFixture<ThirQuestionRegisterBabySittersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThirQuestionRegisterBabySittersComponent]
    });
    fixture = TestBed.createComponent(ThirQuestionRegisterBabySittersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
