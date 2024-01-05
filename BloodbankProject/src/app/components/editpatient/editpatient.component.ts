import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PatientService } from 'src/app/services/patient.service';
@Component({
  selector: 'app-editpatient',
  templateUrl: './editpatient.component.html',
  styleUrls: ['./editpatient.component.css']
})
export class EditpatientComponent implements OnInit {

  dataSource:any=[];
  patient:any;
  constructor(private http:HttpClient,private patientServ:PatientService) { }
  public static options = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  } as const;
  ngOnInit(): void {
    let patientid=this.patientServ.patientid;
    this.patientServ.getPatients().subscribe(
      data=>{
        this.dataSource=data;
        this.dataSource.forEach((element:any) => {
          if(element['PatientId']==patientid){
             this.patient=element;
             console.log(this.patient);
            }
        });
      }
    )
  }
  
   editPatient(){
    this.patient.Dob=new Date().toLocaleDateString('en-GB', EditpatientComponent.options)
    this.patientServ.update(this.patientServ.patientid,this.patient).subscribe(
      data=>{
        console.log(data);
      }
    )
  }
}
