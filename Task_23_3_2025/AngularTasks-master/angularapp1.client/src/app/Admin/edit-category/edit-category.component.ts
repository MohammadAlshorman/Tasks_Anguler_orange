import { Component } from '@angular/core';
import { ServicesService } from '../../MyService/services.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrl: './edit-category.component.css'
})
export class EditCategoryComponent {

  category: { name: string, img: string } = { name: '', img: '' };

  id: any
  cat: any


  constructor(private _ser: ServicesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.id = this.route.snapshot.paramMap.get('id');


    this._ser.getCategoryById(this.id).subscribe((data: any) => {
      this.category = data;

    });
  }

  onSubmitData(data: any) {
    this._ser.editCategory(this.id, data).subscribe(() => {
      alert("edited category")
    })
  }


}
