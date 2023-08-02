import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputpageComponent } from './inputpage.component';

describe('InputpageComponent', () => {
  let component: InputpageComponent;
  let fixture: ComponentFixture<InputpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputpageComponent]
    });
    fixture = TestBed.createComponent(InputpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
