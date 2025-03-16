import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor(private _httpmoh: HttpClient) { }

  getCatrgory() {
    return this._httpmoh.get("https://67cea6ee125cd5af757b6514.mockapi.io/Category");
  }




  postNewUser(data: any){
    return this._httpmoh.post("https://67cea6ee125cd5af757b6514.mockapi.io/Users", data);
  }


  getAllUsers() {

    return this._httpmoh.get("https://67cea6ee125cd5af757b6514.mockapi.io/Users");

  }
}
