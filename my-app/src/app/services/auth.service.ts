// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   constructor() { }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auth } from './../models/auth.model';
import { TokenService } from './token.service';
import { tap } from 'rxjs/operators'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //private apiUrl = `https://bqapi.fakel.lol`
  private apiUrl = `http://localhost:3000`;

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
  ) { }

  login(email: string, password: string) {
    return this.http.post<Auth>(`${this.apiUrl}/auth`, {email:email, password:password})
    .pipe(
      tap(response => this.tokenService.saveToken(response.token))
    );
  }

  logout(){
    this.tokenService.removeToken();
  }
}
