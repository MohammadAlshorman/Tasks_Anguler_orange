import { Component } from '@angular/core';
import { ServicesService } from '../../MyService/services.service';

@Component({
  selector: 'app-get-categories',
  templateUrl: './get-categories.component.html',
  styleUrl: './get-categories.component.css'
})
export class GetCategoriesComponent {
  constructor(private service: ServicesService) { }

  ngOnInit() {
    this.getData();
  }

  data: any[] = []
  getData() {
    this.service.getCategories().subscribe(d => {
      this.data = d
    })
  }
}
