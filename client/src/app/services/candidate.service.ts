import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from "@angular/http";
import { environment} from "../../environments/environment";
import 'rxjs/add/operator/map';

@Injectable()
export class CandidateService {

  headers = new Headers();
  options = new RequestOptions();

  constructor(
    private http: Http
  ) {
    this.headers.append('Content-Type', 'application/json');
    this.options = new RequestOptions({ headers: this.headers });
  }


  getCandidate(){
    let headers  = new Headers();

    headers.append('content-type','applicationn/json');

    return this.http.get(`${environment.baseUrl}/candidate`, this.options)
      .map(res=>res.json());

  }

  registerCandidate(voter){
    return this.http.post(`${environment.baseUrl}/candidate`,voter,this.options)
      .map( res=>res.json());
  }

  deleteCandidate(id){
    return this.http.delete(`${environment.baseUrl}/candidate/${id}`, this.options)
      .map( res=> res.json());
  }

}
