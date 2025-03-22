import { Component } from '@angular/core';
import { SerCategoryService } from '../../ser-category.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrl: './edit-category.component.css'
})
export class EditCategoryComponent {

  Category_ID: number | undefined;

  constructor(private _ser: SerCategoryService, private _Act: ActivatedRoute) { }

  ngOnInit() {

    this.getAllCategory();
  }

  Category_Data: any;
  getAllCategory() {
    const c_ID = Number(this._Act.snapshot.paramMap.get("id"));
    this._ser.getCategorybyID(c_ID).subscribe((data => {

      this.Category_Data = data;

    }))
  }


  Edit_Category(data: any) {


    const c_ID = Number(this._Act.snapshot.paramMap.get("id"));
    this._ser.EditCategory(c_ID,data).subscribe();
    alert("Edit data is successfully!");

  }

}
