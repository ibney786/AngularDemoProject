import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabStepperComponent } from './tab-stepper.component';

describe('TabStepperComponent', () => {
  let component: TabStepperComponent;
  let fixture: ComponentFixture<TabStepperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabStepperComponent]
    });
    fixture = TestBed.createComponent(TabStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
