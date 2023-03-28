import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffrequestComponent } from './staffrequest.component';

describe('StaffrequestComponent', () => {
  let component: StaffrequestComponent;
  let fixture: ComponentFixture<StaffrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffrequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
