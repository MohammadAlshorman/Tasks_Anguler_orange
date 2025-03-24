import { Component } from '@angular/core';
import { ServicesService } from '../MyService/services.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

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
