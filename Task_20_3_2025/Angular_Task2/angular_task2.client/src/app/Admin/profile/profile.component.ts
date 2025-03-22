import { Component } from '@angular/core';
import { SerCategoryService } from '../../ser-category.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  constructor(private _ser: SerCategoryService, private _router: ActivatedRoute) { }

  ngOnInit() {
    this.ID = this._router.snapshot.paramMap.get("id");
    this.getUsers();
  }

  User: any;
  ID: any;

  getUsers() {
    this._ser.getAllUser().subscribe(data => {
      this.User = data.find((d: any) => d.id == this.ID);
      console.log('User Name : ' + this.User.Name);
    });
  }


}
