import { Component, OnInit } from '@angular/core';
import { VoterService} from "../../services/voter.service";
import { Voter} from "../../models/voter";
import { environment} from "../../../environments/environment";
import { Router} from "@angular/router";

@Component({
  selector: 'app-voter-list',
  templateUrl: './voter-list.component.html',
  styleUrls: ['./voter-list.component.css']
})
export class VoterListComponent implements OnInit {

  constructor(
    private voterService: VoterService,
    private router: Router
  ) { }

  voters: Array<Voter> = new Array<Voter>();

  ngOnInit() {
    this.voterService.getVoter()
      .subscribe(res=>{
          this.voters = res.data;
          // console.log(this.voters);
      })
  }

  deleteVoter(voter){
    this.voterService.deleteVoter(voter._id).subscribe(res=>{
      console.log(res);
    })
  }

  addVoter(){
    this.router.navigate(['add-voter']);
  }

}
