import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from "@angular/router";

import { AdminComponent} from "./components/admin/admin.component";
import {LoginComponent} from "./components/login/login.component";
import {VoterListComponent} from "./components/voter-list/voter-list.component";
import {CandidateListComponent} from "./components/candidate-list/candidate-list.component";
import {CanvassingReportComponent} from "./components/canvassing-report/canvassing-report.component";
import {VotePageComponent} from "./components/vote-page/vote-page.component";
import {ValidateVoterComponent} from "./components/validate-voter/validate-voter.component";
import {VicePresidentComponent} from "./components/vice-president/vice-president.component";
import {GeneralSecretaryComponent} from "./components/general-secretary/general-secretary.component";
import {TeasurerComponent} from "./components/teasurer/teasurer.component";
import {MemberComponent} from "./components/member/member.component";
import {JointSecretaryComponent} from "./components/joint-secretary/joint-secretary.component";
import {AddCandidateComponent} from "./components/add-candidate/add-candidate.component";
import {AddVoterComponent} from "./components/add-voter/add-voter.component";
import {PhotoUploadComponent} from "./components/photo-upload/photo-upload.component";

const routes: Routes = [
  {path:'admin', component: AdminComponent},
  {path:'login', component: LoginComponent},
  {path:'voter-list', component: VoterListComponent },
  {path:'candidate-list', component: CandidateListComponent},
  {path:'canvassing-report', component: CanvassingReportComponent},
  {path:'vote-page', component: VotePageComponent},
  {path:'validate-voter', component: ValidateVoterComponent},
  {path:'vice-president', component: VicePresidentComponent},
  {path: 'general-secretary', component: GeneralSecretaryComponent},
  {path: 'treasurer', component: TeasurerComponent},
  {path: 'member', component: MemberComponent},
  {path: 'joint-secretary', component: JointSecretaryComponent},
  {path: 'add-candidate', component: AddCandidateComponent},
  {path: 'add-voter', component: AddVoterComponent},
  {path: 'photo-upload/:id', component: PhotoUploadComponent}
];

@NgModule({
  exports: [ RouterModule ],

  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
