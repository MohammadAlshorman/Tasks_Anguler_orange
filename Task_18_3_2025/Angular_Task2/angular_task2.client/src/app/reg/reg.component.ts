import { Component } from '@angular/core';
import { SerCategoryService } from '../ser-category.service';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent {

  constructor(private _ser: SerCategoryService) { }


  ngOnInit() {

  }


  onSubmit(data: any) {

   

    console.log("Data to be submitted:", data);  
    this._ser.postData(data).subscribe(() => {
      alert("Add New Data is successfully!");
    });
  }


}
