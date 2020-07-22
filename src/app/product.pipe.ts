import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './models/product'

@Pipe({
  name: 'product'
})
export class ProductPipe implements PipeTransform {

  transform(products: Product[], name: string): Product[] {
    if (!name) return products
    return products.filter(p => p.name.replace(/\s+/g, '-').toLowerCase().indexOf(name.toLowerCase()) != -1);
  }

}
