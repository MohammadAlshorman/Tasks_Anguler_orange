import { Component } from '@angular/core';
import { ServicesService } from '../../MyService/services.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-voucher',
  templateUrl: './edit-voucher.component.html',
  styleUrl: './edit-voucher.component.css'
})
export class EditVoucherComponent {
  voucher: { name: string, price: number, quantity: number , id :number} = { name: '', price: 0, quantity: 0 , id:0 };

  id: any


  constructor(private _ser: ServicesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.id = (this.route.snapshot.paramMap.get('id'));


    this._ser.getVoucherById(this.id).subscribe((data: any) => {
      this.voucher = data;

    });

    console.log(this.voucher)
  }

  onSubmitData(data: any) {
    this._ser.editVoucher(this.id, data).subscribe(() => {
      alert("edited voucher")
    })
  }
}
