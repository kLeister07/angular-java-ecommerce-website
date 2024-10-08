import { Product } from './product';

export class CartItem {
  public id: number;
  public name:string;
  public imageUrl: string;
  public unitPrice: number;
  public quantity: number
  
    constructor(product: Product) {
        this.id = product.id!;
        this.name = product.name!;
        this.imageUrl = product.imageUrl!;
        this.unitPrice = product.unitPrice!;
        this.quantity = 1;
    }
}

// import { Product } from './product';

// export class CartItem {

//     constructor(public id: number,
//                 public name:string,
//                 public imageUrl: string,
//                 public unitPrice: number,
//                 public quantity: number = 1) {
//     }
// }


// export class CartItem {
//   id: string;
//   name: string;
//   imageUrl: string;
//   unitPrice: number;

//   quantity: number;

//   constructor(id: string, name: string, imageUrl: string, unitPrice: number) {
//     this.id = id;
//     this.name = name;
//     this.imageUrl = imageUrl;
//     this.unitPrice = unitPrice;

//     this.quantity = 1;
//   }
// }

