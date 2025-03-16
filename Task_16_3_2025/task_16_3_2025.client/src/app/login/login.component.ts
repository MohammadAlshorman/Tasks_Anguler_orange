import { Component } from '@angular/core';
import { UrlService } from '../service/url.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  ngOnInit() {

  }

  constructor(private _url: UrlService) { }

  usersData: any;

  getData(enteresUser:any) {
    this._url.getAllUsers().subscribe((data :any ) => {

      let user = this.usersData = data.find((p: any) => p.Email === enteresUser && p.password === enteresUser);

      if (user) {

        alert("Login Suc")
      }

      else {

        alert("login no LOOOL")
      }
    })


  }



}
