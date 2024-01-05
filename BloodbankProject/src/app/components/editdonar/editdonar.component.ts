import { Component, OnInit } from '@angular/core';
import { DonarService } from 'src/app/services/donar.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-editdonar',
  templateUrl: './editdonar.component.html',
  styleUrls: ['./editdonar.component.css']
})
export class EditdonarComponent implements OnInit {
  dataSource:any=[];
  donar:any;
  constructor(private http:HttpClient,private donarServ:DonarService) { }
  public static options = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  } as const;
  ngOnInit(): void {
    let donarid=this.donarServ.donarid;
    this.donarServ.getDonors().subscribe(
      data=>{
        this.dataSource=data;
        this.dataSource.forEach((element:any) => {
          if(element['DonarId']==donarid){
             this.donar=element;
             console.log(this.donar);
            }
        });
      }
    )
  }
  
   editDonar(){
     this.donar.Dob=new Date().toLocaleDateString('en-GB', EditdonarComponent.options)
    this.donarServ.update(this.donarServ.donarid,this.donar).subscribe(
      data=>{
        console.log(data);
      }
    )
  }
}
