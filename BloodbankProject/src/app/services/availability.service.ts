import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const baseUrl="http://localhost:8080/api/availabilitys";
@Injectable({
  providedIn: 'root'
})
export class AvailabilityService {
  availabilityid=null;
  constructor(private http:HttpClient) { }
  createAvailability(data:any){
    return this.http.post(baseUrl,data);
  }
  getAvailability(){
    return this.http.get(baseUrl);
  }
  update(id:any,data:any){
    return this.http.put(`${baseUrl}/${id}`,data);
  }
  delete(id:any){
    return this.http.delete(`${baseUrl}/${id}`);
  }
  // getMultiple(field:any,data:any){
  //   return this .http.get(`${baseUrl}/${field}&${data}`);
  // }
}
