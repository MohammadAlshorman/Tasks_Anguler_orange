import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private _url: HttpClient) { }

  getCategories() {
    return this._url.get<any>("https://67cd64b6dd7651e464ee3d63.mockapi.io/categories");
  }
  addCategories(data: any) {
    return this._url.post<any>("https://67cd64b6dd7651e464ee3d63.mockapi.io/categories",data);
  }
  getProducts(): Observable<any[]> {
    return this._url.get<any[]>("https://67cd64b6dd7651e464ee3d63.mockapi.io/products");
  }
  addProducts(data: any) {
    return this._url.post<any>("https://67cd64b6dd7651e464ee3d63.mockapi.io/products", data);
  }

  getProductsByID(id: number): Observable<any> {
    return this._url.get(`https://67cd64b6dd7651e464ee3d63.mockapi.io/products/${id}`);
  }
  editProducts(id: number, data: any): Observable<any> {
    return this._url.put(`https://67cd64b6dd7651e464ee3d63.mockapi.io/products/${id}`,data)
  }

  getCategoryById(id: number) {
    return this._url.get<any>(`https://67cd64b6dd7651e464ee3d63.mockapi.io/categories/${id}`);
  }
  editCategory(id: number, data: any): Observable<any> {
    return this._url.put(`https://67cd64b6dd7651e464ee3d63.mockapi.io/categories/${id}`, data)
  }

  addUser(data: any) {
    return this._url.post<any>("https://67cea6ee125cd5af757b6514.mockapi.io/Users", data);
  }

  getAllUsers() {
    return this._url.get("https://67cea6ee125cd5af757b6514.mockapi.io/Users");
  }

  editUser(id: number, data: any): Observable<any> {
    return this._url.put(`https://67cea6ee125cd5af757b6514.mockapi.io/Users/${id}`, data)
  }


  getAllVoucher() {
    return this._url.get("https://67d9ae8e35c87309f529c67f.mockapi.io/sign/voucher");
  }

  addVoucher(data: any) {
    return this._url.post<any>("https://67d9ae8e35c87309f529c67f.mockapi.io/sign/voucher", data);
  }

  getVoucherById(id: number) {
    return this._url.get<any>(`https://67d9ae8e35c87309f529c67f.mockapi.io/sign/voucher/${id}`);
  }

  editVoucher(id: number, data: any): Observable<any> {
    return this._url.put(`https://67d9ae8e35c87309f529c67f.mockapi.io/sign/voucher/${id}`, data)
  }
}
