import { Component } from '@angular/core';
import { SerCategoryService } from '../../ser-category.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {

  AllCategory: any;

  constructor(private _ser: SerCategoryService) { }

  ngOnInit() {

    this.getAllCategory();

  }

  Add_Product(data: any) {


    this._ser.postDatatoProduct(data).subscribe(() => {

      alert("Add New Product is Successfully.");

    })

  }

  getAllCategory() {

    this._ser.getData().subscribe((data) => {

      this.AllCategory = data;

    })
  }

  NewData: any;

  Filter_Product(data: any) {

    this.NewData = {
      Name: data.name,
      Price: data.Price,
      Category_ID: this.AllCategory.find((c: any) => c.id == data.Category_ID)?.id
    }


    this.Add_Product(this.NewData);

  }


}
