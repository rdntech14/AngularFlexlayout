export class CakeModel {
    cakes: Cake[];
}

export class Cake {
    public id: number;
    public name: string;
    public image: string;
    public price: number;

    constructor(id: number, name: string, image: string, price: number) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.price = price;
    }
}


