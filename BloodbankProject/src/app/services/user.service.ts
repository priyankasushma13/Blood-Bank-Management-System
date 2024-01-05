import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const baseUrl="http://localhost:8080/api/register";
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  create(data: any){
    console.log(data);
    return this.http.post(baseUrl,data)
  }
  // create1(data:any){
  //   return this.http.post(baseUrl1,data);
  // }
  get(uname:any){
    return this.http.get(`${baseUrl}/${uname}`);
  }
//   getall(){
//     return this.http.get(baseUrl1);
//   }
}


