import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyndrumComponent } from './syndrum.component';

describe('SyndrumComponent', () => {
  let component: SyndrumComponent;
  let fixture: ComponentFixture<SyndrumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SyndrumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SyndrumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
