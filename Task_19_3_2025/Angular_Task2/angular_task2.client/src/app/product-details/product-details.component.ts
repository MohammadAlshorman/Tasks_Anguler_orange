import { Component } from '@angular/core';
import { SerCategoryService } from '../ser-category.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  Product: any;
  DeProducts: any;
  ProductID!: number;
  constructor(private _ser: SerCategoryService, private Product_Id : ActivatedRoute) { }


  ngOnInit() {

    this.Product_Id.paramMap.subscribe(id => {

      this.ProductID = Number(id.get("id"));
      this.GetProductDetails();

    })

  }


  GetProductDetails() {

    this._ser.getProduct().subscribe(data => {

      this.Product = data;
      this.GetDetails();
    })

  }


  GetDetails() {

    this.DeProducts = this.Product.filter((p: any) => p.id == this.ProductID);

  }


}
