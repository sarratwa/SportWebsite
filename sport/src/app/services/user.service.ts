import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userUrl : string = 'http://localhost:3000/users';
  constructor(private htppClient  :HttpClient) { }

  signup(user : any){
    return(this.htppClient.post(`${this.userUrl}/signup`,user));
  }

  login(user : any) {
    return (this.htppClient.post<{message: String, user:any}>(`${this.userUrl}/login`, user));
  }

  editUser(user : any){
    return (this.htppClient.put<{message: any}>(`${this.userUrl}/${user._id}`,user));
  }

  getAllUseres(){
    return (this.htppClient.get<{useres:any}>(this.userUrl));
  }

  getUserById(id : any){
    return(this.htppClient.get<{user : any}>(`${this.userUrl}/${id}`));
  }

  deleteUser(id:any){
    return (this.htppClient.delete<{message : String}>(`${this.userUrl}/${id}`));
  }
}
