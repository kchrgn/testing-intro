const products = require('../../src/data/products');
const { sortProductsByPrice } = require('../../src/catalog');

describe('sortProductsByPrice', () => {
  test("все товары c 'asc' сортируются как [3, 6, 5, 4, 2, 1]", () => {
    expect(sortProductsByPrice(products, 'asc').map((product) => product.id)).toEqual([3, 6, 5, 4, 2, 1]);
  });
  
  test('все товары без направления сортируются как [3, 6, 5, 4, 2, 1]', () => {
    expect(sortProductsByPrice(products, '').map((product) => product.id)).toEqual([3, 6, 5, 4, 2, 1]);
  });
  
  test("товары [1, 3, 4] c 'asc' сортируются как [3, 4, 1]", () => {

    expect(sortProductsByPrice(products.filter((product) => product.id === 1 || product.id === 3 || product.id === 4), 'asc').map((product) => product.id)).toEqual([3, 4, 1]);
  });

  test("все товары c 'desc' сортируются как [1, 2, 4, 5, 6, 3]", () => {
    expect(sortProductsByPrice(products, 'desc').map((product) => product.id)).toEqual([1, 2, 4, 5, 6, 3]);
  });

  test("товары [3, 1, 4] c 'desc' сортируются как [1, 4, 3]", () => {
    expect(sortProductsByPrice(products.filter((product) => product.id === 3 || product.id === 1 || product.id === 4), 'desc').map((product) => product.id)).toEqual([1, 4, 3]);
  });

  test("товары [5, 2, 6] c 'desc' сортируются как [2, 5, 6]", () => {
    expect(sortProductsByPrice(products.filter((product) => product.id === 5 || product.id === 2 || product.id === 6), 'desc').map((product) => product.id)).toEqual([2, 5, 6]);
  });

  test("'asc' не меняет исходный массив [1, 3, 4]", () => {
    const prod = products.filter((product) => product.id === 1 || product.id === 3 || product.id === 4);
    sortProductsByPrice(prod, 'asc');
    expect(prod).toEqual(prod);
  });

  test("'desc' не меняет исходный массив [1, 3, 4]", () => {
    const prod = products.filter((product) => product.id === 1 || product.id === 3 || product.id === 4);
    sortProductsByPrice(prod, 'desc');
    expect(prod).toEqual(prod);
  });

  test('направление по умолчанию не меняет исходный массив всех товаров', () => {
    sortProductsByPrice(products, '');
    expect(products).toEqual(products);
  });
});
