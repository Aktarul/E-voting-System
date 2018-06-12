import { Component, OnInit } from '@angular/core';
import { CandidateService} from "../../services/candidate.service";

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent implements OnInit {

  constructor(
    private candidateService: CandidateService
  ) { }

  ngOnInit() {

  }

  

}
