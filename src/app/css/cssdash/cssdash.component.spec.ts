import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssdashComponent } from './cssdash.component';

describe('CssdashComponent', () => {
  let component: CssdashComponent;
  let fixture: ComponentFixture<CssdashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CssdashComponent]
    });
    fixture = TestBed.createComponent(CssdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
