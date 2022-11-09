import { Component} from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UsersService } from '../../services/users.service';
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
  id = ''
// tenemos que injectar en el contructor el servicio router
  constructor(
    private authService: AuthService,
    private router: Router,
    private usersService: UsersService
  ) { }

  login() {
    if(this.email !== '' && this.password !== ''){
      this.authService.login(this.email, this.password)
      .subscribe(resp => {
        console.log(resp)
        this.token = resp.token
        this.usersService.getAll(this.token)
        .subscribe(resp =>{
          for (let i of resp) {
            if(i.email == this.email){
              this.id = i.id
            }
          }
          this.usersService.getRoles(this.token, this.id)
          .subscribe(resp=>{
            if(resp.roles.admin){
              this.router.navigate(['/pedidos'])
            }else if(resp.roles.waiter){
              this.router.navigate(['/pedidos'])
            }else if(resp.roles.chef){
              this.router.navigate(['/ordenes'])
            }
          })

        })
      },response =>{
        console.error(response);
        this.statusDetail = 'USUARIO O CONTRASEÑA ERRADA '})
      }else{
        this.statusDetail = 'INGRESE USUARIO Y CONTRASEÑA PARA ENTRAR AL SISTEMA'
      }
    }
}


