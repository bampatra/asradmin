import { Injectable, Inject } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";

@Injectable()
export class SlotService {
  myAppUrl: string = "";

  constructor(private _http: Http, @Inject("BASE_URL") baseUrl: string)
  {
    this.myAppUrl = baseUrl;
  }

  getSlots()
  {
    return this._http.get(this.myAppUrl + "api/slot/index").map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  deleteSlot(id)
  {
    return this._http.delete(this.myAppUrl + "api/room/" + id).map((response: Response) => response.json())
      .catch(this.errorHandler);
  }
  

  errorHandler(error: Response)
  {
    console.log(error);
    return Observable.throw(error);
  }
}