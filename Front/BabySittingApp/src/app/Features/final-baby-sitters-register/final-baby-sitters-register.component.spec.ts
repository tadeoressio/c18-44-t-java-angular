import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalBabySittersRegisterComponent } from './final-baby-sitters-register.component';

describe('FinalBabySittersRegisterComponent', () => {
  let component: FinalBabySittersRegisterComponent;
  let fixture: ComponentFixture<FinalBabySittersRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinalBabySittersRegisterComponent]
    });
    fixture = TestBed.createComponent(FinalBabySittersRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
