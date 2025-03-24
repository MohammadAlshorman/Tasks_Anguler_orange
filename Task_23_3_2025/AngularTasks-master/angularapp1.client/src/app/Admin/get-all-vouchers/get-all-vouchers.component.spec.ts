import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllVouchersComponent } from './get-all-vouchers.component';

describe('GetAllVouchersComponent', () => {
  let component: GetAllVouchersComponent;
  let fixture: ComponentFixture<GetAllVouchersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetAllVouchersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllVouchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
