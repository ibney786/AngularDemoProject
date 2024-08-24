import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkipuntillComponent } from './skipuntill.component';

describe('SkipuntillComponent', () => {
  let component: SkipuntillComponent;
  let fixture: ComponentFixture<SkipuntillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkipuntillComponent]
    });
    fixture = TestBed.createComponent(SkipuntillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
