import { Component } from '@angular/core';
import { ServicesService } from '../../MyService/services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-voucher',
  templateUrl: './add-voucher.component.html',
  styleUrl: './add-voucher.component.css'
})
export class AddVoucherComponent {
  constructor(private _ser: ServicesService, private _route: Router) { }


  ngOnInit() {
    
  }

  onSubmitData(data: any) {
    this._ser.addVoucher(data).subscribe(() => {
      alert("add voucher")

    })
  }
}
