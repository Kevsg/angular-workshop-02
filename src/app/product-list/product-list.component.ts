import { Component, OnInit } from '@angular/core';
import { Product, exampleProduct } from '../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = exampleProduct;
  filterData: string;

  constructor() { }

  ngOnInit(): void {
  }

}
