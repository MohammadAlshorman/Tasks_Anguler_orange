import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchProductsService {

  private categoriesApiUrl = 'https://67d30be18bca322cc268fdac.mockapi.io/categories'
  private productsApiUrl = 'https://67d30be18bca322cc268fdac.mockapi.io/products'

  getCategories(): Observable<any[]> {
    return this._http.get<any[]>(this.categoriesApiUrl);
  }

  getProducts(id?: number): Observable<any[]> {
    return this._http.get<any[]>(this.productsApiUrl);
  }

  getProductById(id: number): Observable<any> {
    return this._http.get<any>(`${this.productsApiUrl}/${id}`);
  }
  constructor(private _http: HttpClient) { }
}
