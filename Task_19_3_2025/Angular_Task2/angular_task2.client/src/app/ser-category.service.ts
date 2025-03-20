import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SerCategoryService {

  constructor(private Url: HttpClient) {

  }

  getData() {
    return this.Url.get<any>("https://67cd64b6dd7651e464ee3d63.mockapi.io/categories");
  }


  getCategorybyID(id: number) {

    return this.Url.get(`https://67cd64b6dd7651e464ee3d63.mockapi.io/categories/${id}`);
  }


  getProduct() {

    return this.Url.get<any>("https://67d7325f9d5e3a10152a46a6.mockapi.io/Products");
  }

  getProductByID(id: number) {

    return this.Url.get(`https://67d7325f9d5e3a10152a46a6.mockapi.io/Products/${id}`);
  }

  postData(data:any) {

    return this.Url.post<any>("https://67d7325f9d5e3a10152a46a6.mockapi.io/Users", data);

  }

  getAllUser() {

    return this.Url.get<any>("https://67d7325f9d5e3a10152a46a6.mockapi.io/Users");
  }


  postDatatoProduct(data: any) {

    return this.Url.post<any>("https://67d7325f9d5e3a10152a46a6.mockapi.io/Products", data);

  }

  postDatatoCategory(data: any) {

    return this.Url.post<any>("https://67cd64b6dd7651e464ee3d63.mockapi.io/categories", data);

  }


  EditCategory(id: number , data : any) {

    return this.Url.put<any>(`https://67cd64b6dd7651e464ee3d63.mockapi.io/categories/${id}`,data);
  }
  
  EditProduct(id: number, data: any) {

    return this.Url.put<any>(`https://67d7325f9d5e3a10152a46a6.mockapi.io/Products/${id}`, data);
  }
}
