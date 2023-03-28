import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisanlistComponent } from './artisanlist.component';

describe('ArtisanlistComponent', () => {
  let component: ArtisanlistComponent;
  let fixture: ComponentFixture<ArtisanlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtisanlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtisanlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
