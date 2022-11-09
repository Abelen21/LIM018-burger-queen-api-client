import { Component, OnInit } from '@angular/core';
import { Order } from '../../models/order.model';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orders : Order[] = []

  orders2: Order[] = []

  constructor(
    private ordersService : OrdersService
  ) { }

  ngOnInit(): void {
    this.ordersService.getAllOrders().subscribe(data => {
      this.orders = data;
      this.orders2 = this.orders.filter((el) => el.status === 'pendiente')
    })
  }

  viewPendientes = () => {
    this.orders2 = this.orders.filter((el) => el.status === 'pendiente')
    console.log(this.orders2)
    return this.orders2
  };

  viewListos = () => {
    this.orders2 = this.orders.filter((el) => el.status === 'listo')
    console.log(this.orders2)
    return this.orders2
  };

}
