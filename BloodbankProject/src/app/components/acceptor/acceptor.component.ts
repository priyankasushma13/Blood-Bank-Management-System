import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog ,MatDialogConfig} from '@angular/material/dialog';
import { AddpatientComponent } from '../addpatient/addpatient.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { PatientService } from 'src/app/services/patient.service';
import { MatSort } from '@angular/material/sort';
import { EditpatientComponent } from '../editpatient/editpatient.component';
@Component({
  selector: 'app-acceptor',
  templateUrl: './acceptor.component.html',
  styleUrls: ['./acceptor.component.css']
})
export class AcceptorComponent implements OnInit {
  displayedColumns: string[] = ['PatientId', 'PatientName', 'BloodGroup','Gender','Dob','Age','State','City','Email', 'phoneNumber','BloodAmount','Reason','edit','delete'];
  dataSource:any=[];
  details:any;
  search="";
  field="";

  constructor(private dialog:MatDialog, private http:HttpClient,private patientServ:PatientService) { }

  ngOnInit(): void {
    this.patientServ.getPatients().subscribe(
      data=>{
        this.dataSource=data;
        
      }
    )
    
  }
  deletePatient(id:any){
    this.patientServ.delete(id).subscribe(
      data=>{
        console.log(data);
        this.ngOnInit();
      }
    )
  }
  // editDonar(id:any,data:any){
  //   this.donarserv.update(id,data).subscribe(
  //     data=>{
  //       console.log(data);
  //     }
  //   )
  // }
  onEdit(id:any){
    this.patientServ.patientid=id;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus=true;
    dialogConfig.width="67%";
    this.dialog.open(EditpatientComponent,dialogConfig);
  }
  onAdd(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus=true;
    dialogConfig.width="67%";
    this.dialog.open(AddpatientComponent,dialogConfig);
  }
  Search(){
    this.patientServ.getMultiple(this.field,this.search).subscribe(
      data=>{
        this.dataSource=data;
      }
    )
  }
}
