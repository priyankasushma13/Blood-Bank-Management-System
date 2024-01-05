import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AvailabilityService } from 'src/app/services/availability.service';
@Component({
  selector: 'app-editavailability',
  templateUrl: './editavailability.component.html',
  styleUrls: ['./editavailability.component.css']
})
export class EditavailabilityComponent implements OnInit {
  dataSource:any=[];
  availability:any;
  constructor(private http:HttpClient,private availabilityServ:AvailabilityService) { }
  ngOnInit(): void {
    let availabilityid=this.availabilityServ.availabilityid;
    this.availabilityServ.getAvailability().subscribe(
      data=>{
        this.dataSource=data;
        this.dataSource.forEach((element:any) => {
          if(element['AvailabilityId']==availabilityid){
             this.availability=element;
             console.log(this.availability);
            }
        });
      }
    )
  }
  
   editAvailability(){
    this.availabilityServ.update(this.availabilityServ.availabilityid,this.availability).subscribe(
      data=>{
        console.log(data);
      }
    )
  }

}
