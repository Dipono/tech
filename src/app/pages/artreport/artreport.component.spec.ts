import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtreportComponent } from './artreport.component';

describe('ArtreportComponent', () => {
  let component: ArtreportComponent;
  let fixture: ComponentFixture<ArtreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
