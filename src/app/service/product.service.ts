import { Injectable } from '@angular/core';
import { Product, exampleProduct } from '../models/product'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }

  getAllProduct(): Observable<Product[]> {
    return of(exampleProduct)
  }

  getAllProductHttp(): Observable<Product[]> {
    return this.http.get<Product[]>(
      'http://165.22.255.58:3000/products'
    );
  }

  getSpecificProduct(code: string): Observable<Product> {
    return of(exampleProduct.filter(p => p.code === code)[0])
  }

}
