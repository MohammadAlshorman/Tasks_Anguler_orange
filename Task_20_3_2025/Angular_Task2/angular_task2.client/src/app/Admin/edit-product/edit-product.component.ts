import { Component } from '@angular/core';
import { SerCategoryService } from '../../ser-category.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent {

  Product: any;
  AllCategory: any;
   constructor(private _ser: SerCategoryService, private _Act: ActivatedRoute) { }


    ngOnInit(){

      this.getAllCategory();
      this.GetDataProduct();

    }



  GetDataProduct() {

    const Product_ID = Number(this._Act.snapshot.paramMap.get("id"));

     this._ser.getProductByID(Product_ID).subscribe((data) => {

       this.Product = data;

    })

  }



  Edit_Product(data: any) {


    const Product_ID = Number(this._Act.snapshot.paramMap.get("id"));
    this._ser.EditProduct(Product_ID, data).subscribe();
    alert("Edit data is successfully!");

  }


  getAllCategory() {

    this._ser.getData().subscribe((data) => {

      this.AllCategory = data;

    })
  }

  
}
