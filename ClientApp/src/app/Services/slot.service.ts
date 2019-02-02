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

  getSlotById(id: string, time: Date)
  {
    return this._http.get(this.myAppUrl + "api/slot/Details/" + id + "/" + time).map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  saveSlot(slot)
  {
    return this._http.post(this.myAppUrl + "api/slot/Create", slot).map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  updateSlot(slot)
  {
    return this._http.put(this.myAppUrl + "api/slot/Edit", slot).map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  deleteSlot(id, time)
  {
    return this._http.delete(this.myAppUrl + "api/slot/Delete/" + id + "/" + time).map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  cancelBooking(id, time)
  {
    return this._http.get(this.myAppUrl + "api/slot/Cancel/" + id + "/" + time).map((response: Response) => response.json())
      .catch(this.errorHandler);
  }
  

  errorHandler(error: Response)
  {
    console.log(error);
    return Observable.throw(error);
  }
}