import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRepoLinksComponent } from './admin-repo-links.component';

describe('AdminRepoLinksComponent', () => {
  let component: AdminRepoLinksComponent;
  let fixture: ComponentFixture<AdminRepoLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRepoLinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRepoLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
