import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeIconComponent } from './badge-icon.component';

describe('BadgeIconComponent', () => {
  let component: BadgeIconComponent;
  let fixture: ComponentFixture<BadgeIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BadgeIconComponent]
    });
    fixture = TestBed.createComponent(BadgeIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
