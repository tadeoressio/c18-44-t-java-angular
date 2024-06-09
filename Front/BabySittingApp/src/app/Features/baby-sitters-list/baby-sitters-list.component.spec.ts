import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabySittersListComponent } from './baby-sitters-list.component';

describe('BabySittersListComponent', () => {
  let component: BabySittersListComponent;
  let fixture: ComponentFixture<BabySittersListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BabySittersListComponent]
    });
    fixture = TestBed.createComponent(BabySittersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
