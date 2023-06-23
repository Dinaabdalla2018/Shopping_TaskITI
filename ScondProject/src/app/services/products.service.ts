import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseUrl:string='http://localhost:9999/products';
  constructor(private http:HttpClient) { }

  getAllproducts(){
    return this.http.get(this.baseUrl);
  }

  getproductById(productId: any){
    return this.http.get(`${this.baseUrl}/${productId}`)
  }

  addproduct(product: any){
    return this.http.post(this.baseUrl,product)
  }

  editproduct(productId:any,product: any){
    return this.http.put(`${this.baseUrl}/${productId}`,product)
  }

  deleteProduct(productId:any){
   return this.http.delete(`${this.baseUrl}/${productId}`)
  }
}
