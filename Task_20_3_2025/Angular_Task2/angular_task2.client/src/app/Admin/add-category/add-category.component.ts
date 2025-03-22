import { Component } from '@angular/core';
import { SerCategoryService } from '../../ser-category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {


  constructor(private _ser: SerCategoryService) { }



  Add_Category(data: any) {

    this._ser.postDatatoCategory(data).subscribe(() => {

      alert("Add New category is Successfully.");

    })

  }

}
