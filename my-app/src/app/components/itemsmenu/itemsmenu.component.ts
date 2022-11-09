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
  //myOrder: { items:[], total:0};
  // para mostrar y ocultar con el boton

  constructor(private productsService: ProductsService) {
    this.ProductsList = this.productsService.getmyOrder();
    console.log(this.ProductsList)
  }
  ngOnInit(): void {
  }
  // onAddToOrder(rpoduct: Product) {
  //   const item = this.myOrder.items.find(i => i.id === product.id)
  //   if(!item){
  //     this.myOrder.items.push({id: itemsProduct.id, name:itemsProduct.name, qty:1, unitPrice: itemsProduct.price})
  //   } else {
  //     item.qty = item.qty + 1
  //   }

  //   this.myOrder.total = this.myOrder.items.reduce((total,item)=>{
  //     total = total + (item.qty * item.unitPrice)

  //     return total
  //   },0)
    // }
  onAddToOrder(product: Product) {
    this.productsService.addProduct(product);
    // this.total = this.productsService.getTotal();
  }
  }
