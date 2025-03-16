import { Component } from '@angular/core';
import { UrlService } from '../service/url.service';

@Component({
  selector: 'app-registration',
  standalone: false,
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  ngOnInit() { }

  constructor(private _url: UrlService) { }


  PostData(data : any) {

    this._url.postNewUser(data).subscribe(() => {

      alert("User Registered Successfully");


    });


  }
}
