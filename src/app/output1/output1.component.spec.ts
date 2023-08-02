import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Output1Component } from './output1.component';

describe('Output1Component', () => {
  let component: Output1Component;
  let fixture: ComponentFixture<Output1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Output1Component]
    });
    fixture = TestBed.createComponent(Output1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
