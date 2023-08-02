import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputpageComponent } from './outputpage.component';

describe('OutputpageComponent', () => {
  let component: OutputpageComponent;
  let fixture: ComponentFixture<OutputpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutputpageComponent]
    });
    fixture = TestBed.createComponent(OutputpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
