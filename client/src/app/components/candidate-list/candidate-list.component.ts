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

}
