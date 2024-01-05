import { Component, OnInit,AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DonarService } from 'src/app/services/donar.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-adddonar',
  templateUrl: './adddonar.component.html',
  styleUrls: ['./adddonar.component.css']
})
export class AdddonarComponent implements OnInit {
  donar={
    DonarId:"",
    DonarName:"",
    BloodGroup:"",
    Dob:"",
    Gender:"",
    Age:"",
    City:"",
    State:"",
    phoneNumber:"",
    Email:"",
    LastDonatedDate:"",
    AnyDiseases:"",
    BloodAmount:""
  }
  constructor(private donarserv:DonarService) { }

  public static options = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  } as const;
  ngOnInit(): void {
  
  }
  addDonor(){
    let details={
      DonarId:this.donar.DonarId,
      DonarName:this.donar.DonarName,
      BloodGroup:this.donar.BloodGroup,
      Dob:new Date(this.donar.Dob).toLocaleDateString('en-GB', AdddonarComponent.options),
      Gender:this.donar.Gender,
      Age:this.donar.Age,
      City:this.donar.City,
      State:this.donar.State,
      phonenumber:this.donar.phoneNumber,
      Email:this.donar.Email,
      LastDonatedDate:this.donar.LastDonatedDate,
      AnyDiseases:this.donar.AnyDiseases
    }
    this.donarserv.createDonor(details).subscribe(
      data=>{
        console.log(data);
        this.ngOnInit
      },
      err=>{
        console.log(err);
      }
    )
  }
}
