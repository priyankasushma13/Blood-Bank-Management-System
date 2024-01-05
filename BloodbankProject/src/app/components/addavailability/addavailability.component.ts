import { Component, OnInit } from '@angular/core';
import { AvailabilityService } from 'src/app/services/availability.service';
@Component({
  selector: 'app-addavailability',
  templateUrl: './addavailability.component.html',
  styleUrls: ['./addavailability.component.css']
})
export class AddavailabilityComponent implements OnInit {

  availability={
    AvailabilityId:"",  
    BloodGroup:"",
    BloodAmount:""
  }
  constructor(private availabilityserv:AvailabilityService) { }

  
  ngOnInit(): void {
  
  }
  addAvailability(){
    let details={
      AvailabilityId:this.availability.AvailabilityId,
      BloodGroup:this.availability.BloodGroup,
      BloodAmount:this.availability.BloodAmount
    }
    this.availabilityserv.createAvailability(details).subscribe(
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

