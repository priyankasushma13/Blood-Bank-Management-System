import { ANALYZE_FOR_ENTRY_COMPONENTS,CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatmodulesModule } from './matmodules/matmodules.module';
import { AppRoutingModule } from './app-routing.module';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AvailabilityComponent } from './components/availability/availability.component';
import { DonarComponent } from './components/donar/donar.component';
import { AcceptorComponent } from './components/acceptor/acceptor.component';
import { RegisterComponent } from './components/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule} from '@angular/flex-layout';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { AdddonarComponent } from './components/adddonar/adddonar.component';
import { AddpatientComponent } from './components/addpatient/addpatient.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditdonarComponent } from './components/editdonar/editdonar.component';
import { DatePipe } from '@angular/common';
import { EditpatientComponent } from './components/editpatient/editpatient.component';
import { AddavailabilityComponent } from './components/addavailability/addavailability.component';
import { EditavailabilityComponent } from './components/editavailability/editavailability.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AvailabilityComponent,
    DonarComponent,
    AcceptorComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    AdddonarComponent,
    AddpatientComponent,
    EditdonarComponent,
    EditpatientComponent,
    AddavailabilityComponent,
    EditavailabilityComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatmodulesModule,
    FlexLayoutModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  
    
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
  entryComponents:[RegisterComponent,AdddonarComponent,AddpatientComponent]
})
export class AppModule { }
