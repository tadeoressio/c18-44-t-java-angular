import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadsRequestsPageComponent } from './dads-requests-page.component';

describe('DadsRequestsPageComponent', () => {
  let component: DadsRequestsPageComponent;
  let fixture: ComponentFixture<DadsRequestsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DadsRequestsPageComponent]
    });
    fixture = TestBed.createComponent(DadsRequestsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
