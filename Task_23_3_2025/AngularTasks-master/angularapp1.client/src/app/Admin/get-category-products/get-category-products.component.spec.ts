import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCategoryProductsComponent } from './get-category-products.component';

describe('GetCategoryProductsComponent', () => {
  let component: GetCategoryProductsComponent;
  let fixture: ComponentFixture<GetCategoryProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetCategoryProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetCategoryProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
