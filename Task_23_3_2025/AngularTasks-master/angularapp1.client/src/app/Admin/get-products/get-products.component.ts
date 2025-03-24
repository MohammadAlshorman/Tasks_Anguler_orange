import { Component } from '@angular/core';
import { ServicesService } from '../../MyService/services.service';

@Component({
  selector: 'app-get-products',
  templateUrl: './get-products.component.html',
  styleUrl: './get-products.component.css'
})
export class GetProductsComponent {

  constructor(private mys: ServicesService) { }

  ngOnInit() {

    this.getData();
  }


  products: any[] = []
  getData() {

    this.mys.getProducts().subscribe((data) => {

      this.products = data;
    })
  }
}
