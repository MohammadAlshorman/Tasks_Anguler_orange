import { Component } from '@angular/core';
import { SerCategoryService } from '../ser-category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  constructor(private _ser: SerCategoryService, private _rout: Router) { }


  ngOnInit() {


  }


  CheckLogin(data_1: any) {

    this._ser.getAllUser().subscribe(data => {

      let User = data.find((d: any) => d.Email == data_1.Email && d.Password == data_1.Password);
      console.log('The User is : ' + User);
      if (User) {
        alert("Login Successfully.");
        console.log('User ID:', User.id);
        this._rout.navigate(['/Dashboard/Profile', User.id]);
      } else {

        alert("Invalid LogIn.");
      }

    })

  }

}
