import { Component} from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  token = ''
  email = ''
  password = ''
  statusDetail = ''
// tenemos que injectar en el contructor el servicio router
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  login() {
    if(this.email !== '' && this.password !== ''){
      this.authService.login(this.email, this.password)
      .subscribe(resp => {
        console.log(resp)
        this.router.navigate(['/pedidos'])
      },response =>{
        console.error(response);
        this.statusDetail = 'usuario o contraseña errada'})
      }else{
        this.statusDetail = 'Ingrese usuario y contraseña para entrar al sistema'
      }
    }
}


