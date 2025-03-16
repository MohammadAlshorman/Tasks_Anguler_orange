import { Component } from '@angular/core';
import { FetchProductsService } from '../Services/fetch-products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  products: any[] = [];
  categoryId: any;
  constructor(private _service: FetchProductsService, private _active: ActivatedRoute) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.categoryId = this._active.snapshot.paramMap.get("id");

    this._service.getProducts(this.categoryId).subscribe((data) => {

      this.products = data.filter((p: any) => p.categoryID == this.categoryId)
    })
  }
}
