import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const baseUrl="http://localhost:8080/api/donars";
@Injectable({
  providedIn: 'root'
})
export class DonarService {
  donarid=null;
  constructor(private http:HttpClient) { }
  createDonor(data:any){
    return this.http.post(baseUrl,data);
  }
  getDonors(){
    return this.http.get(baseUrl);
  }
  update(id:any,data:any){
    return this.http.put(`${baseUrl}/${id}`,data);
  }
  delete(id:any){
    return this.http.delete(`${baseUrl}/${id}`);
  }
  getMultiple(field:any,data:any){
    return this .http.get(`${baseUrl}/${field}&${data}`);
  }
}
