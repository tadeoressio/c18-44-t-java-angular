import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikMenuComponent } from './lik-menu.component';

describe('LikMenuComponent', () => {
  let component: LikMenuComponent;
  let fixture: ComponentFixture<LikMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LikMenuComponent]
    });
    fixture = TestBed.createComponent(LikMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
