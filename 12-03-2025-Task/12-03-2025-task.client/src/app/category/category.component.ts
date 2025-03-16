import { Component } from '@angular/core';
import { FetchProductsService } from '../Services/fetch-products.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

  categories: any[] = [];
  constructor(private _service: FetchProductsService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this._service.getCategories().subscribe(data => {
      this.categories = data;
    })
  }
}
