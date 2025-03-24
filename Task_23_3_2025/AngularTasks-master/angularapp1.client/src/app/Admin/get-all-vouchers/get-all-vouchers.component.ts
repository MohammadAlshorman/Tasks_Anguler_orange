import { Component } from '@angular/core';
import { ServicesService } from '../../MyService/services.service';

@Component({
  selector: 'app-get-all-vouchers',
  templateUrl: './get-all-vouchers.component.html',
  styleUrl: './get-all-vouchers.component.css'
})
export class GetAllVouchersComponent {
  constructor(private _ser: ServicesService) { }

  ngOnInit() {
    this.getVouchers()
  }
  vouchers: any;
  getVouchers() {
    this._ser.getAllVoucher().subscribe((v) =>
      this.vouchers = v
    )
  }
}
