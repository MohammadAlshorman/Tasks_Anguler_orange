import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProudectComponent } from './proudect.component';

describe('ProudectComponent', () => {
  let component: ProudectComponent;
  let fixture: ComponentFixture<ProudectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProudectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProudectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
