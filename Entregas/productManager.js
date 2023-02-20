
class ProductManager {

    constructor() {
    this.products = [];
    this.nextProductId = 1;
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      console.log("Todos los campos son obligatorios");
      return;
    }
    if (this.products.some((product) => product.code === code)) {
      console.log("El código del producto ya existe");
      return;
    }
    this.products.push({
      id: this.nextProductId,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    });
    this.nextProductId++;
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const product = this.products.find((product) => product.id === id);
    if (product) {
      return product;
    } else {
      console.log("No hemos encontrado tu producto :) ");
    }
  }
}

const productManager = new ProductManager();

productManager.addProduct(
  "ProductOne",
  "Description",
  799,
  "assets/productOne.jpg",
  "423",
  20
);
productManager.addProduct(
  "ProductSecond",
  "Description",
  299,
  "assets/productSecond.jpg",
  "424",
  20
);
productManager.addProduct(
  "ProductThird",
  "Description",
  899,
  "assets/productThird.jpg",
  "425",
  20
);

const products = productManager.getProducts();
console.log(products);

const product = productManager.getProductById(1);
console.log(product);

const nonexistentProduct = productManager.getProductById(329);
