import { Product } from "./product.model";
import { SignupUser } from "./signup-user.model";

export class Checkout {
  id: number = 0;
  totalAmout: number = 0;
  carts: Product[] = [];
  customer:SignupUser = new SignupUser;
}
