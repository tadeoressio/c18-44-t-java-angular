import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterBabySittersComponent } from './register-baby-sitters.component';

describe('RegisterBabySittersComponent', () => {
  let component: RegisterBabySittersComponent;
  let fixture: ComponentFixture<RegisterBabySittersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterBabySittersComponent]
    });
    fixture = TestBed.createComponent(RegisterBabySittersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
