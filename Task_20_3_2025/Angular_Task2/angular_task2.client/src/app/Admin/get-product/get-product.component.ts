import { Component } from '@angular/core';
import { SerCategoryService } from '../../ser-category.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-product',
  templateUrl: './get-product.component.html',
  styleUrl: './get-product.component.css'
})
export class GetProductComponent {


  product: any;

  constructor(private _ser: SerCategoryService, private frm: FormBuilder) { }

  ngOnInit() {

    this.getProduct();

  }



  getProduct() {

    this._ser.getProduct().subscribe(data => {

      this.product = data;

 
    })

  }

 



}
