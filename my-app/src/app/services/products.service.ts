import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // modulo para hacer peticiones
import { Product } from '../models/products.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private myOrder: any[] = []; // verificar por que el tipo de producto no product no funciona
  constructor(private http: HttpClient) {}

  //obteniendo los productos. presionando boton
  addProduct(product: Product) {
    // this.myorder.push(this.contabilizador)
    if(this.myOrder.some((e)=>e.id===product.id)){
      this.myOrder = this.myOrder.map((elem) => {
        // console.log(this.myorder)
        if (elem.id === product.id) {
          elem.qty += 1;
          elem.price *= elem.qty;
          return elem;
        }
      });
    }
    this.myOrder.push({...product})
  }
  // poniendo en privado my order por seguridad, y con esta funcion la llamammos
  getmyOrder() {
    return this.myOrder;
  }
  // sumando el total de price
  getTotal() {
    return this.myOrder.reduce((sum, item) => sum + item.price, 0);
  }
  //conección con la API
  // getAllProducts(token:string){
  //   return this.http.get<Product[]>('http://localhost:3000/products',{
  //     headers:{
  //       Authorization : "Bearer EsUnSecreto",
  //   }
  // });
  getAllProducts() {
    return this.http.get<Product[]>('http://localhost:3000/products');
    //<Product[]>: le decimos a la api que queremos que nos traiga el contenigo como []
  }
}
