export class Product {
    constructor(public code: string, public name: string, public price: number, public available: boolean, public rating: number, public imageUrl: string) { }
}

export const exampleProduct: Product[] = [
    { code: 'zzc1', 'name': 'lawnmower', price: 100.5, available: true, rating: 1.0, imageUrl: 'aaa' },
    { code: 'asdc1', 'name': 'lamp', price: 120.1, available: false, rating: 1.0, imageUrl: 'bbb' },
    { code: 'xxx1', 'name': 'keyboard', price: 130, available: true, rating: 1.0, imageUrl: 'ccc' }
]