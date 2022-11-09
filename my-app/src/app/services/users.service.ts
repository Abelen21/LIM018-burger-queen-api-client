// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class UsersService {

//   constructor() { }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, CreateUserDTO } from './../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl = `http://localhost:3000/users`;
  private id = ''

  constructor(
    private http: HttpClient
  ) { }

  create(token:string, dto:CreateUserDTO) {
    return this.http.post<User>(this.apiUrl,dto,{
      headers:{
        Authorization : `Bearer ${token}`,
      }
    });
  }

  getAll(token:string) {
    return this.http.get<User[]>(this.apiUrl,{
      headers:{
        Authorization : `Bearer ${token}`,
      }
   });
  }

  getRoles(token:string, id:string) {
    return this.http.get<User>(`${this.apiUrl}/${id}`,{
      headers:{
        Authorization : `Bearer ${token}`,
      }
   });
  }
}
