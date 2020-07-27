export class Product {
  constructor(public code: string, public name: string, public price: number, public available: boolean,
              public rating: number, public imageUrl: string) { }
}

export const exampleProduct: Product[] = [
  { code: 'zzc1', name: 'lawnmower    01', price: 100.5, available: true, rating: 1.0, imageUrl: 'aaa' },
  { code: 'asdc1', name: 'lamp with a big light', price: 120.111, available: false, rating: 2.5, imageUrl: 'bbb' },
  { code: 'xxx1', name: 'Omega keyboard', price: 130, available: true, rating: 5.0, imageUrl: 'ccc' },
  { code: 'xxx1', name: 'Omega keyboard', price: 130, available: true, rating: 5.0, imageUrl: 'ccc' },
];
