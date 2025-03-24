import { Component } from '@angular/core';
import { ServicesService } from '../MyService/services.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  constructor(private service: ServicesService) { }

  ngOnInit() {
    this.getData();
  }

  data : any[] = []
  getData() {
    this.service.getCategories().subscribe(d => {
      this.data = d
    })
  }


}
