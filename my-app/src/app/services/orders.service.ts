import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order, UpdateOrderDTO } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }

  getAllOrders() {
    return this.http.get<Order[]>('http://localhost:3000/orders');
    //<Product[]>: le decimos a la api que queremos que nos traiga el contenigo como []
  }

  updateOrder(id:string, dto:UpdateOrderDTO){
    return this.http.put<UpdateOrderDTO>(`${'http://localhost:3000/orders'}/${id}`, dto);
  }
}
