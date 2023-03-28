import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtfeedbackComponent } from './artfeedback.component';

describe('ArtfeedbackComponent', () => {
  let component: ArtfeedbackComponent;
  let fixture: ComponentFixture<ArtfeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtfeedbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtfeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
