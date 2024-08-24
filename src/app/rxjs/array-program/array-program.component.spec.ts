import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayProgramComponent } from './array-program.component';

describe('ArrayProgramComponent', () => {
  let component: ArrayProgramComponent;
  let fixture: ComponentFixture<ArrayProgramComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArrayProgramComponent]
    });
    fixture = TestBed.createComponent(ArrayProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
