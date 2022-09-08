import Product from "./product";
import {HomeDelivery, StoreDelivery} from "./delivery"

interface ICart {
    products: Array<Product>
    delivery: HomeDelivery | StoreDelivery

    addProduct(name?: string, price?:number) : void

    countCartPrice() : number

    setDelivery(addressOrStoreId: string | number, date? : string) : void

    checkout() : "Ok" | undefined
}

class Cart implements ICart {
    products: Array<Product> = [];
    delivery: HomeDelivery | StoreDelivery

    addProduct(name?: string, price?: number): void {
        this.products.push(new Product(this.products.length, name, price));
    }

    deleteProduct(id: number): void {
        const products = this.products;
        let productToDelete = products.find(product => product.id === id);
        if (!productToDelete) {
            return;
        } else {
            this.products.splice(id, 1);
        }
        console.log("----DELETE PRODUCT-----");
        console.log(this, this.products);
    }

    checkout(): "Ok" | undefined {
        try {
            if (!this.products.every(product => product.name && product.price)) {
                throw new Error("Some products missing price or name");
            }
            if (!this.delivery) {
                throw new Error("Delivery was not set");
            }
            console.log("-------PRODUCTS LIST--------")
            console.log(this.products);
            console.log("-------DELIVERY--------")
            console.log(this.delivery);
            return "Ok";
        } catch (e) {
            console.error(e);
        }
    }

    countCartPrice(): number {
        let price = this.products.reduce<number>((price, product) => {
            return price + product.price || 0;
        }, 0)
        console.log("----TOTAL PRICE-----");
        console.log(this, price);
        return price;
    }

    setDelivery(storeId: number) :void
    setDelivery(address: string, date: string) :void
    setDelivery(addressOrStoreId: string | number, date?: string): void {
        if (typeof addressOrStoreId === "number") {
            this.delivery = new StoreDelivery(addressOrStoreId);
        } else {
            this.delivery = new HomeDelivery(addressOrStoreId, date!);
        }
    }
}

let goodCartHome = new Cart();

goodCartHome.addProduct("T shirt", 100);
goodCartHome.addProduct("denim", 200);
goodCartHome.setDelivery("my home 1", "13.01.2023");

let goodCartStore = new Cart();

goodCartStore.addProduct("watches", 1000);
goodCartStore.addProduct("phone", 500);
goodCartStore.setDelivery(1);

let cartWithBadProduct = new Cart();

cartWithBadProduct.addProduct("Cap");
cartWithBadProduct.addProduct("socks", 20);
cartWithBadProduct.setDelivery("my home 2", "13.01.2023");

let cartWithNoDelivery = new Cart();

cartWithNoDelivery.addProduct("Dish", 10);

[goodCartHome, goodCartStore, cartWithBadProduct, cartWithNoDelivery].forEach(cart => cart.checkout());

cartWithBadProduct.deleteProduct(0)
cartWithBadProduct.checkout()

goodCartHome.countCartPrice()


