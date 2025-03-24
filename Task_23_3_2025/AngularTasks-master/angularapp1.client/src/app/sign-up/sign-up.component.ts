import { Component } from '@angular/core';
import { ServicesService } from '../MyService/services.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  constructor(private _ser: ServicesService) { }


  ngOnInit() { }


  onSubmitData(data: any) {
    this._ser.addUser(data).subscribe(() => {
      alert(
        "add Users")

    })
  }

}
