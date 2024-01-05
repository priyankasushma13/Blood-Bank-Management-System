import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog ,MatDialogConfig} from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide=true;
  onCreate(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus=true;
    dialogConfig.width="30%";
    this.dialog.open(RegisterComponent,dialogConfig);
  }
  logd:any=[];
  constructor(private dialog:MatDialog, private router:Router,private userservice:UserService) { }
  ngOnInit(): void {
  }
  login=new FormGroup({
  uname: new FormControl(''),
  pwd: new FormControl('')
  });
  checkuser(){
    this.userservice.get(this.login.controls.uname.value)
    .subscribe(data=>{
    this.logd=data;
      if(data!==null){
       if(this.logd.pwd==this.login.controls.pwd.value){
         console.log(this.logd);
         this.router.navigateByUrl("/header");
       }
       else{
        console.log(this.logd);
        alert("Invalid Username or password");
       }
      }
      else{
        alert("UserName was not registered!");
      }
     },err=>{
       console.log(err);
     }
     );
  }
}
