import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Output3Component } from './output3.component';

describe('Output3Component', () => {
  let component: Output3Component;
  let fixture: ComponentFixture<Output3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Output3Component]
    });
    fixture = TestBed.createComponent(Output3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
