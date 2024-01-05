import { Component, OnInit,AfterViewInit,ViewChild } from '@angular/core';
import { MatDialog ,MatDialogConfig} from '@angular/material/dialog';
import { AddavailabilityComponent } from '../addavailability/addavailability.component'; 
import { HttpClient } from '@angular/common/http';
import { AvailabilityService } from 'src/app/services/availability.service';
import { EditavailabilityComponent } from '../editavailability/editavailability.component';
import { DatePipe } from '@angular/common';
import { MatPaginator } from '@angular/material/paginator';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.css']
})
export class AvailabilityComponent implements OnInit {
  displayedColumns: string[] = ['AvailabilityId',  'BloodGroup','BloodAmount','edit',];
  dataSource:any=[];
 constructor(private dialog:MatDialog, private http:HttpClient,private availabilityServ:AvailabilityService) { }
  ngOnInit(): void {
    this.availabilityServ.getAvailability().subscribe(
      data=>{
        this.dataSource=data; 
      }
    )
  }
   ngAfterViewInit(): void {
       
   }
  onChangedPage(pageData: PageEvent){  
    console.log(pageData);  
  }  
  onAdd(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus=true;
    dialogConfig.width="28%";
    this.dialog.open(AddavailabilityComponent,dialogConfig);
  }
  onEdit(id:any){
    this.availabilityServ.availabilityid=id;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus=true;
    dialogConfig.width="30%";
    this.dialog.open(EditavailabilityComponent,dialogConfig);
  }
 
}
