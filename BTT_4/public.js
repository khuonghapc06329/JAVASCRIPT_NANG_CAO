class Product{
    id;
    name;
    constructor(){
        this.id = 1;
        this.name = 'Product 1';

    }
    getProduct(){
        console.log(`Product name: ${this.name}, id: ${this.id}`);

    }
}
var product = new Product();
product.getProduct();
product.name = 'Product 2';
product.id = 2;
console.log(`Product name: ${this.name}, id: ${this.id}`);