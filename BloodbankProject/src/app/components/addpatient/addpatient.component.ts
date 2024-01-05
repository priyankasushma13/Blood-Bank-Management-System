import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PatientService } from 'src/app/services/patient.service';
@Component({
  selector: 'app-addpatient',
  templateUrl: './addpatient.component.html',
  styleUrls: ['./addpatient.component.css']
})
export class AddpatientComponent implements OnInit {
  patient={
    PatientId:"",
    PatientName:"",
    BloodGroup:"",
    Dob:"",
    Gender:"",
    Age:"",
    City:"",
    State:"",
    phoneNumber:"",
    Email:"",
    BloodAmount:"",
    Reason:""
  }
  constructor(private patientserv:PatientService) { }

  ngOnInit(): void {
  }
  addPatient(){
    let details={
      PatientId:this.patient.PatientId,
      PatientName:this.patient.PatientName,
      BloodGroup:this.patient.BloodGroup,
      Dob:this.patient.Dob,
      Gender:this.patient.Gender,
      Age:this.patient.Age,
      City:this.patient.City,
      State:this.patient.State,
      phonenumber:this.patient.phoneNumber,
      Email:this.patient.Email,
      Reason:this.patient.Reason,
      BloodAmount:this.patient.BloodAmount
    }
    this.patientserv.createPatient(details).subscribe(
      data=>{
        console.log(data);
      },
      err=>{
        console.log(err);
      }
    )
  }
}
