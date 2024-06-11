import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeconQuestionBabySittersRegisterComponent } from './second-question-baby-sitters-register.component';

describe('SeconQuestionBabySittersRegisterComponent', () => {
  let component: SeconQuestionBabySittersRegisterComponent;
  let fixture: ComponentFixture<SeconQuestionBabySittersRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeconQuestionBabySittersRegisterComponent]
    });
    fixture = TestBed.createComponent(SeconQuestionBabySittersRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
