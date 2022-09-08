interface IDelivery {
    date: string
}

export class HomeDelivery implements IDelivery {
    date: string;
    address: string;

    constructor(address: string, date: string) {
        this.address = address;
        this.date = date;
    }
}

export class StoreDelivery implements IDelivery {
    date: string = new Date().toDateString();
    storeId: number;

    constructor(storeId: number) {
        this.storeId = storeId;
    }
}
