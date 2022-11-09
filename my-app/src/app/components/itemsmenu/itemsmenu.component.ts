import { Component, OnInit,Input } from '@angular/core';
import {Product} from '../../models/products.model';
import { ProductsService } from '../../services/products.service';


@Component({
  selector: 'app-itemsmenu',
  templateUrl: './itemsmenu.component.html',
  styleUrls: ['./itemsmenu.component.scss']
})
export class ItemsmenuComponent implements OnInit {
  @Input() ProductsList: Product[] = []
  
  // itemsProduct: Product[] = [];
  // myOrder : Product[] = [];
  myOrder: Product[] = []
  total: number = 0
  // para mostrar y ocultar con el boton

  constructor(private productsService: ProductsService) {
    // this.myOrder= { items:[], total:0};
    //this.productsService.getmyOrder();
    // console.log(this.ProductsList)
  }
  ngOnInit(): void {
  }
  onAddToOrder(product: Product) {

    const item = this.myOrder.find(i => i.id === product.id)
    if(!item){
      this.myOrder.push({id: product.id, name:product.name, qty:1, price: product.price})
    } else {
      item.qty = item.qty + 1
    }
    console.log(this.myOrder)
    this.total = this.myOrder.reduce((total,item)=>{
      total = total + (item.qty * item.price)
      return total
    },0)
    console.log(this.total)
  }

  // onAddToOrder(product: Product) {
  //   this.productsService.addProduct(product);
  //   // this.total = this.productsService.getTotal();
  // }
  }
