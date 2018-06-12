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

const routes: Routes = [
  {path:'admin', component: AdminComponent},
  {path:'login', component: LoginComponent},
  {path:'voter-list', component: VoterListComponent },
  {path:'candidate-list', component: CandidateListComponent},
  {path:'canvassing-report', component: CanvassingReportComponent},
  {path:'vote-page', component: VotePageComponent},
  {path:'validate-voter', component: ValidateVoterComponent}
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
