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
import { VicePresidentComponent } from './components/vice-president/vice-president.component';
import { GeneralSecretaryComponent } from './components/general-secretary/general-secretary.component';
import { JointSecretaryComponent } from './components/joint-secretary/joint-secretary.component';
import { TeasurerComponent } from './components/teasurer/teasurer.component';
import { MemberComponent } from './components/member/member.component';
import { AddCandidateComponent } from './components/add-candidate/add-candidate.component';
import { AddVoterComponent } from './components/add-voter/add-voter.component';

import {VoterService} from "./services/voter.service";
import {HttpModule} from "@angular/http";
import { PhotoUploadComponent } from './components/photo-upload/photo-upload.component';
import {FileUploadModule} from "ng2-file-upload";
import {PasswordValidationService} from "./services/password-validation.service";
import {CandidateService} from "./services/candidate.service";

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
    ValidateVoterComponent,
    VicePresidentComponent,
    GeneralSecretaryComponent,
    JointSecretaryComponent,
    TeasurerComponent,
    MemberComponent,
    AddCandidateComponent,
    AddVoterComponent,
    PhotoUploadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    FileUploadModule
  ],
  providers: [
    VoterService,
    PasswordValidationService,
    CandidateService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
