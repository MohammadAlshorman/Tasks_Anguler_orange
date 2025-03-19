import { Component } from '@angular/core';
import { SerCategoryService } from '../../ser-category.service';

@Component({
  selector: 'app-get-category',
  templateUrl: './get-category.component.html',
  styleUrl: './get-category.component.css'
})
export class GetCategoryComponent {


  constructor(private _servCategory: SerCategoryService) { }

  ngOnInit() {

    this.get();
  }

  AllData: any;


  get() {

    this._servCategory.getData().subscribe((data) => {

      this.AllData = data;
    })
  }
}
