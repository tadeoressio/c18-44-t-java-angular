import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumMenuComponent } from './premium-menu.component';

describe('PremiumMenuComponent', () => {
  let component: PremiumMenuComponent;
  let fixture: ComponentFixture<PremiumMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PremiumMenuComponent]
    });
    fixture = TestBed.createComponent(PremiumMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
