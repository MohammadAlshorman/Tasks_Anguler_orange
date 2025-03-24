import { Component } from '@angular/core';
import { ServicesService } from '../../MyService/services.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-category-products',
  templateUrl: './get-category-products.component.html',
  styleUrl: './get-category-products.component.css'
})
export class GetCategoryProductsComponent {
  constructor(private mys: ServicesService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.getData();
  }


  products: any[] = []
  categoryId: any;
  getData() {
    this.categoryId = this.route.snapshot.paramMap.get("id");

    this.mys.getProducts().subscribe((data) => {

      this.products = data.filter((p: any) => p.categoryId == this.categoryId)
    })
  }
}
