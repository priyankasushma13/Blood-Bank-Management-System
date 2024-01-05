import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { AcceptorComponent } from './components/acceptor/acceptor.component';
import { AvailabilityComponent } from './components/availability/availability.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { DonarComponent } from './components/donar/donar.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AdddonarComponent } from './components/adddonar/adddonar.component';
import { AddpatientComponent } from './components/addpatient/addpatient.component';
import { EditdonarComponent } from './components/editdonar/editdonar.component';
import { AddavailabilityComponent } from './components/addavailability/addavailability.component';
import { EditavailabilityComponent } from './components/editavailability/editavailability.component';
const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"home",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"availability",component:AvailabilityComponent},
  {path:"donar",component:DonarComponent},
  {path:"acceptor",component:AcceptorComponent},
  {path:"header",component:HeaderComponent},
  {path:"register",component:RegisterComponent},
  {path:"aboutus",component:AboutusComponent},
  {path:"contactus",component:ContactusComponent},
  {path:"adddonar",component:AdddonarComponent},
  {path:"addpatient",component:AddpatientComponent},
  {path:"editdonar/id",component:EditdonarComponent},
  {path:"addavailability",component:AddavailabilityComponent},
  {path:"editavailability/id",component:EditavailabilityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
