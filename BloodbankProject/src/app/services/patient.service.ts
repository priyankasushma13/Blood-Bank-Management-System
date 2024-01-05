import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const baseUrl="http://localhost:8080/api/patients";
@Injectable({
  providedIn: 'root'
})
export class PatientService {
  patientid=null;
  constructor(private http:HttpClient) { }
  createPatient(data:any){
    return this.http.post(baseUrl,data);
  }
  getPatients(){
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


