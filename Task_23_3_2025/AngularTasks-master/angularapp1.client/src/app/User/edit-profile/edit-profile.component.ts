import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent {

  @Input() User: any;
  @Output() UpdateData = new EventEmitter<any>()

  saveChange(data:any) {
    return this.UpdateData.emit(data);
  }
}
