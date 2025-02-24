import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular6Component } from './angular6.component';

describe('Angular6Component', () => {
  let component: Angular6Component;
  let fixture: ComponentFixture<Angular6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Angular6Component]
    });
    fixture = TestBed.createComponent(Angular6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
