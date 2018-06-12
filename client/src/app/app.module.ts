import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NavbarComponent } from './components/navbar/navbar.component';
import { InnerNavbarComponent } from './components/inner-navbar/inner-navbar.component';
import { VoterListComponent } from './components/voter-list/voter-list.component';
import { CandidateListComponent } from './components/candidate-list/candidate-list.component';
import { CanvassingReportComponent } from './components/canvassing-report/canvassing-report.component';
import { VotePageComponent } from './components/vote-page/vote-page.component';
import { ValidateVoterComponent } from './components/validate-voter/validate-voter.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    LoginComponent,
    NavbarComponent,
    InnerNavbarComponent,
    VoterListComponent,
    CandidateListComponent,
    CanvassingReportComponent,
    VotePageComponent,
    ValidateVoterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
