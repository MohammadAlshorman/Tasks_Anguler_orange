import { Component } from '@angular/core';
import { ServicesService } from '../../MyService/services.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  constructor(private _ser: ServicesService) { }
  user: any;
  enableEdit: boolean = false;
  data:any
  ngOnInit() {
    this.data = sessionStorage.getItem('User');
    this.user = JSON.parse(this.data);
  }

  activeModel() {
    this.enableEdit = true;
  }

  UpdateProfile(data:any) {
    this.user = data;
    this._ser.editUser(this.user.id, this.user).subscribe(() => { })
    sessionStorage.setItem('User', this.user)
    this.enableEdit = false;
  }

}
