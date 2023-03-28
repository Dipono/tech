import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralreportComponent } from './generalreport.component';

describe('GeneralreportComponent', () => {
  let component: GeneralreportComponent;
  let fixture: ComponentFixture<GeneralreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
