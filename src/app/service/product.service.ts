import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:8081/api/v1/';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl + 'products');
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(this.apiUrl + 'products/' + id);
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl + 'products/', product);
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(
      this.apiUrl + 'products/' + product.id + '/',
      product
    );
  }

  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(this.apiUrl + 'products/' + id + '/');
  }
}
