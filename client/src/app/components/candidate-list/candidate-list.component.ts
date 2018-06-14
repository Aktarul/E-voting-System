import { Component, OnInit } from '@angular/core';
import { CandidateService} from "../../services/candidate.service";
import {Router} from "@angular/router";
import { Candidate} from "../../models/candidate";

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent implements OnInit {

  constructor(
    private candidateService: CandidateService,
    private router: Router
  ) { }


  candidates: Array<Candidate> = new Array<Candidate>();

  ngOnInit() {

    this.candidateService.getCandidate()
      .subscribe(res =>{
        this.candidates = res.data;
        console.log(this.candidates);
      })

  }

  registerCandidate(){
    this.router.navigate(['add-candidate']);
  }

  updateCandidate(candidate){
    this.router.navigate([`update-candidate/${candidate._id}`]);
  }

  // deleteCandidate(candidate){
  //   this.candidateService.deleteCandidate(candidate._id)
  //     .subscribe(res=>{
  //       console.log(res.data);
  //     })
  // }


  deleteCandidate(candidate){
    var r = confirm("Are you sure!");
    if (r == true) {
      this.candidates.splice(this.candidates.indexOf(candidate), 1);
      this.candidateService.deleteCandidate(candidate._id)
        .subscribe(res=>{


        })
    } else {
      // this.toasterService.Warning("You have cancelled deletion!!");
    }
  }

  viewCandidate(candidate){
    this.router.navigate([`view-candidate/${candidate._id}`]);
  }



}
