import { Component } from '@angular/core';
import { SerCategoryService } from '../ser-category.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  constructor(private _ser: SerCategoryService) { }


  ngOnInit() {


  }


  CheckLogin(data_1: any) {

    this._ser.getAllUser().subscribe(data => {

      let User = data.find((d: any) => d.Email == data_1.Email && d.Password == data_1.Password);
      console.log('The User is : ' + User);
      if (User) {
        alert("Login Successfully.");
      } else {

        alert("Invalid LogIn.");
      }

    })

  }

}
