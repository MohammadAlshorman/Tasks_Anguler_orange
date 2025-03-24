import { Component } from '@angular/core';
import { ServicesService } from '../MyService/services.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  product: any;
  pId: number = 0;

  constructor(private service: ServicesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    this.pId = Number(this.route.snapshot.paramMap.get("id")); 
    this.service.getProductsByID(this.pId).subscribe(data => {
      this.product = data;
    });
  }
}
