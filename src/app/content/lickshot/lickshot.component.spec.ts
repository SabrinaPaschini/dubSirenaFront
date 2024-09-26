import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LickshotComponent } from './lickshot.component';

describe('LickshotComponent', () => {
  let component: LickshotComponent;
  let fixture: ComponentFixture<LickshotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LickshotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LickshotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
