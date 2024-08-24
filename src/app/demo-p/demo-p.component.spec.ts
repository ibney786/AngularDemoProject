import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoPComponent } from './demo-p.component';

describe('DemoPComponent', () => {
  let component: DemoPComponent;
  let fixture: ComponentFixture<DemoPComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoPComponent]
    });
    fixture = TestBed.createComponent(DemoPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
