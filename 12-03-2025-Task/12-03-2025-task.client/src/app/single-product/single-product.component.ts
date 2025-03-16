import { Component } from '@angular/core';
import { FetchProductsService } from '../Services/fetch-products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.css'
})
export class SingleProductComponent {

  product: any;
  productId: any;
  constructor(private _service: FetchProductsService, private _active: ActivatedRoute) { }

  ngOnInit() {
    this.productId = this._active.snapshot.paramMap.get('id');
    this.getProduct();
  }

  getProduct() {
    this._service.getProductById(this.productId).subscribe(data => {
      this.product = data;
    })
  }
}
