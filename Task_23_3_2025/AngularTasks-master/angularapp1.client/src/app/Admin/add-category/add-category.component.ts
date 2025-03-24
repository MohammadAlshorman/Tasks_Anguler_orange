import { Component } from '@angular/core';
import { ServicesService } from '../../MyService/services.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {
  constructor(private _ser: ServicesService) { }


  ngOnInit() { }


  onSubmitData(data: any) {
    this._ser.addCategories(data).subscribe(() => {
      alert("add category")
    })
  }
}
