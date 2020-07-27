import { Product } from './product';

describe('Product', () => {
  it('should create an instance', () => {
    expect(new Product('zxcxzc', 'lawnmower', 100, false, 5, 'asdsa')).toBeTruthy();
  });
});
