import { Component } from '@angular/core';
import { ServicesService } from '../../MyService/services.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent {
  product = {
    name: '',
    avatar: '',
    categoryId: 0
  };

  categories: any[] = [];
  pId: number = 0;

  constructor(private _ser: ServicesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.pId = Number(this.route.snapshot.paramMap.get("id"));
    this.getProduct();
    this.getCategories();
  }

  getCategories() {
    this._ser.getCategories().subscribe((d) => {
      this.categories = d;
    });
  }

  getProduct() {
    this._ser.getProductsByID(this.pId).subscribe((data) => {
      this.product = data;
    });
  }

  onSubmitData() {
    console.log("Submitting product:", this.product);
    this._ser.editProducts(this.pId, this.product).subscribe(() => {
      alert("Product updated successfully!");
    });
  }
}
