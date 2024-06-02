import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotMenuComponent } from './not-menu.component';

describe('NotMenuComponent', () => {
  let component: NotMenuComponent;
  let fixture: ComponentFixture<NotMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotMenuComponent]
    });
    fixture = TestBed.createComponent(NotMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
