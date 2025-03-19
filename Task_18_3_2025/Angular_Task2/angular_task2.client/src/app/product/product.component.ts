import { Component } from '@angular/core';
import { SerCategoryService } from '../ser-category.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {


  product: any;
  productByID: any;
  ID!: number;

  constructor(private _ser: SerCategoryService, private frm: FormBuilder, private _Param: ActivatedRoute) { }

  ngOnInit() {

    this._Param.paramMap.subscribe(Param => {

      this.ID = Number(Param.get("id"));
      this.getProduct();

    })
    
  }

 

  getProduct() {

    this._ser.getProduct().subscribe(data => {

      this.product = data;

      this.FilterData();
    })

  }

  FilterData() {
    if (this.product && this.product.length > 0) {
      this.productByID = this.product.filter((p: any) => p.categoryId == this.ID);
    }
  }



}


