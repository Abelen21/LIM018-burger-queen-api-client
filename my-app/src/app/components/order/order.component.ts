import { Component, OnInit, Input} from '@angular/core';
import { Order, UpdateOrderDTO} from '../../models/order.model';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  @Input() order: Order = {
    id:'',
    userId : '',
    client: '',
    products:[
      {
        productId: '',
        qty:0,
      }
    ],
    status:'',
    dateEntry: new Date("2018/01/30 23:30:14"),
    dateProcessed: new Date("2018/01/30 23:35:14"),
  }

  constructor(
    private ordersService: OrdersService
  ) {}

  ngOnInit(): void {
  }

  updateOrder(){
    const changes = {
      status : 'listo'
    }
    // const id =  this.orderChossen.id;
    const id =  '1'
    this.ordersService.updateOrder(id, changes)
    .subscribe(data =>{
      console.log('update', data)
    })
  }



  // updateOrder(idProduct: number, body: UpdateOrderDTO): Observable<Product> {
  //   return this.http.put<Order>(`https://example.com/api/productos`, body);
  // }



}
