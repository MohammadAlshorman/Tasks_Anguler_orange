import { Component } from '@angular/core';
import { SerCategoryService } from '../ser-category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {


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
