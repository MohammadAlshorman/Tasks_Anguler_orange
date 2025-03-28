import { Component } from '@angular/core';
import { SerCategoryService } from '../ser-category.service';
import { PaginatePipe, PaginationService } from 'ngx-pagination';

interface Item {
  id: number;
  name: string;
  // أضف أي خصائص أخرى تحتاجها
}

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  AllData: Item[] = []; // تحديد نوع AllData كـ Array من Item
  p: number = 1; // الصفحة الحالية

  constructor(private _servCategory: SerCategoryService) { }

  ngOnInit() {
    this.get();
  }

  get() {
    this._servCategory.getData().subscribe((data: Item[]) => {
      this.AllData = data;
    });
  }
}
