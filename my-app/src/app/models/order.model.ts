// import { Product } from './products.model';
export interface Product {
  productId : string,
  qty : number
}

export interface Order {
  id : string,
  userId : string,
  client : string,
  products : Product[],
  status : string,
  dateEntry : Date,
  dateProcessed : Date
}

export interface CreateOrderDTO extends Omit<Order, 'id' > {}

export interface UpdateOrderDTO extends Partial<CreateOrderDTO> { }




