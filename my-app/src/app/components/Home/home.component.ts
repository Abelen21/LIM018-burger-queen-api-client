import { ExpressionType } from '@angular/compiler';
import { Component, OnInit, Type } from '@angular/core';
import { Product } from '../../models/products.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class homeComponent implements OnInit {
  name:string = 'Stefani';
  myOrder: any[] = []; // se pone privado para proteger la accecibilidad
  // qty: number = 0;
  total:number = 0;
  products: Product[] = [];
  filteredProducts: Product[] = [];
  token: String = '';
  // para mostrar y ocultar con el boton
  show = {
    showBreakfast: false,
    showLunch:  false
  };
  constructor(private productsService: ProductsService) {
    this.myOrder = this.productsService.getmyOrder();
  }
  //para manejar peticiones asincronas
  ngOnInit(): void {
    // this.productsService.getAllProducts().subscribe((data) => {
    //   console.log(data[0].type);
    //   this.products = data;
    // });
  }
  // para filtrar por type breakfast
  viewBreakfast = () => {
    if (this.show.showBreakfast) {
      this.show.showBreakfast = false;
    } else {
      this.productsService.getAllProducts().subscribe((data) => {
      this.filteredProducts = data.filter((element) => {
         return element.type === 'breakfast';
      });
      this.products = this.filteredProducts;
    });
     this.show.showBreakfast = true;
     this.show.showLunch= false;
    }
  };
  // para ver por cena
  viewLunch = () => {
    if (this.show.showLunch) {
      this.show.showLunch = false;
    } else {
    this.productsService.getAllProducts().subscribe((data) => {
      this.filteredProducts = data.filter((e) => {
        return e.type === 'lunch';
      });
      this.products = this.filteredProducts;
    });
    this.show.showLunch = true;
    this.show.showBreakfast = false;
    }
  };

  //para agregar los productos y contabilizarlos y calcular el totoal del precio
  onAddToOrder(product: Product) {
    this.productsService.addProduct(product);
    console.log(this.myOrder)
    // if(this.myOrder.some((e)=>e.name===product.name)){

    //   console.log(product.name)
    // }
    // this.myOrder.push(this.qty)


    // this.total = this.productsService.getTotal();
  //   console.log(this.myOrder)
  }
  // para poder cambiar el nombreee
  changeName(event: Event) {
    console.log(event);
    const element = event.target as HTMLInputElement;
    this.name = element.value;
  }
}
