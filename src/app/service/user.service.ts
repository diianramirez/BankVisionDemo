import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
const  Url = 'http://localhost:8090/test/users';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  baseUrl = 'http://localhost:8090/test/users';

  getUserById (id: number) {
    console.log("mi url es:  "+ this.baseUrl+"/"+id);
    return this.http.get<User>(this.baseUrl+"/"+id);
  }
  
  getAllUsers (){
    return this.http.get<User[]>(this.baseUrl+"/viewall");
  }
  
  addUser (user:User) {
    return this.http.post<User>(`${Url}/new`, user, {
      observe: 'response'
    })
  }

  editUser (user: User, id:number) {
    return this.http.put<User>(this.baseUrl+"/"+id, user);
  }

  deleteUser (user: User, id:number): Observable<any> {
    console.log("url de borrado:  " + this.baseUrl+"/"+id);
    return this.http.delete<User>(this.baseUrl+"/"+user.id);
  }

  deleteUserById (iddel:number) {
    //console.log("url de borrado:  " + this.baseUrl+"/"+id);
    return this.http.delete<User>(this.baseUrl+"/"+iddel);
  }
}
