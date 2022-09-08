interface IProduct {
    id: number
    price: number
    name: string
}

class Product implements IProduct {
    id: number;
    name: string;
    price: number;

    constructor(id: number, name?: string, price?: number) {
        this.id = id;
        if (name)
            this.name = name;
        if (price)
            this.price = price;
    }
}

export = Product;