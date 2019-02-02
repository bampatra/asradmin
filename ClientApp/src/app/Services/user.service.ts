import { Injectable, Inject } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";

@Injectable()
export class UserService {
  myAppUrl: string = "";

  constructor(private _http: Http, @Inject("BASE_URL") baseUrl: string)
  {
    this.myAppUrl = baseUrl;
  }

  getStudents()
  {
    return this._http.get(this.myAppUrl + "api/Student/index").map(res => res.json()).catch(this.errorHandler);
  }

  getStaffs()
  {
    return this._http.get(this.myAppUrl + "api/Staff/index").map(res => res.json()).catch(this.errorHandler);
  }

  errorHandler(error: Response)
  {
    console.log(error);
    return Observable.throw(error);
  }
}