import { Component, OnInit,AfterViewInit,ViewChild } from '@angular/core';
import { MatDialog ,MatDialogConfig} from '@angular/material/dialog';
import { AdddonarComponent } from '../adddonar/adddonar.component';
import { HttpClient } from '@angular/common/http';
import { DonarService } from 'src/app/services/donar.service';
import { EditdonarComponent } from '../editdonar/editdonar.component';
import { DatePipe } from '@angular/common';
import { MatPaginator } from '@angular/material/paginator';
import { PageEvent } from '@angular/material/paginator';
@Component({
  selector: 'app-donar',
  templateUrl:'./donar.component.html',
  styleUrls: ['./donar.component.css']
})
export class DonarComponent implements AfterViewInit,OnInit {
  displayedColumns: string[] = ['DonarId', 'DonarName', 'BloodGroup','Gender','Dob','Age','State','City','Email', 'phoneNumber','BloodAmount','LastDonatedDate','edit','delete'];
  dataSource:any=[];
  details:any;
  search="";
  field="";
  totalposts=10;
  postperpage=5;
  pageSizeOption = [1, 2, 5, 10];  
 constructor(private dialog:MatDialog, private http:HttpClient,private donarServ:DonarService) { }
  ngOnInit(): void {
    this.donarServ.getDonors().subscribe(
      data=>{
        this.dataSource=data; 
      }
    )
  }
   ngAfterViewInit(): void {
       
   }
  deleteDonar(id:any){
    this.donarServ.delete(id).subscribe(
      data=>{
        console.log(data);
        this.ngOnInit();
      }
    )
  }
  onChangedPage(pageData: PageEvent){  
    console.log(pageData);  
  }  
  onAdd(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus=true;
    dialogConfig.width="67%";
    this.dialog.open(AdddonarComponent,dialogConfig);
  }
  onEdit(id:any){
    this.donarServ.donarid=id;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus=true;
    dialogConfig.width="67%";
    this.dialog.open(EditdonarComponent,dialogConfig);
  }
  Search(){
    this.donarServ.getMultiple(this.field,this.search).subscribe(
      data=>{
        this.dataSource=data;
      }
    )
  }
}