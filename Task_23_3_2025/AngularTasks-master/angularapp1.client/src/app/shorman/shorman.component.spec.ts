import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShormanComponent } from './shorman.component';

describe('ShormanComponent', () => {
  let component: ShormanComponent;
  let fixture: ComponentFixture<ShormanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShormanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShormanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
