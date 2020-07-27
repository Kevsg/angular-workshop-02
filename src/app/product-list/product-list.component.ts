import { Component, OnInit } from '@angular/core';
import { Product, exampleProduct } from '../models/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  filterData = '';

  constructor(public service: ProductService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.service.getAllProduct().subscribe((products) => {
      return (this.products = products);
    });
  }

  onRatingClicked(message: string): void {
    alert(message);
  }

}
