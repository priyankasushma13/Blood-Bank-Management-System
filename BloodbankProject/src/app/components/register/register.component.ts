import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { MatDialog ,MatDialogConfig} from '@angular/material/dialog';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 submitted=false;
 onCreate(){
  const dialogConfig = new MatDialogConfig();
  dialogConfig.autoFocus=true;
  dialogConfig.width="30%";
  this.dialog.open(RegisterComponent,dialogConfig);
}
 
  constructor( private userservice:UserService,private router:Router,private dialog:MatDialog) { }

  ngOnInit(): void {
  }
   hide1=true;
   hide2=true;
   register=new FormGroup({
    uname: new FormControl(''),
    mobile: new FormControl(''),
    pwd: new FormControl(''),
    cpwd:new FormControl(''),
  });
  check(){
    const data={
      uname:this.register.controls.uname.value  ,
      mobile:this.register.controls.mobile.value,
      pwd:this.register.controls.pwd.value,
      cpwd:this.register.controls.cpwd.value
    }
    this.userservice.create(data).subscribe(
      response=>{
        console.log(response);
        this.submitted=true;
      },
      error =>{
        console.log(error);
      });  
      if(this.submitted==true){
      alert("Not  successfully registered");
      this.onCreate();
      }
      else{
        alert("Success");
      }
    }
  }

