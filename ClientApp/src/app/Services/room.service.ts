import { Injectable, Inject } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";

@Injectable()
export class RoomService {
  myAppUrl: string = "";

  constructor(private _http: Http, @Inject("BASE_URL") baseUrl: string)
  {
    this.myAppUrl = baseUrl;
  }

  getRooms()
  {
    return this._http.get(this.myAppUrl + "api/room/index").map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  getRoomById(id: string)
  {
    return this._http.get(this.myAppUrl + "api/room/Details/" + id).map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  saveRoom(room)
  {
    return this._http.post(this.myAppUrl + "api/room/Create", room).map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  updateRoom(room)
  {
    return this._http.put(this.myAppUrl + "api/room/Edit", room).map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  deleteRoom(roomID)
  {
    return this._http.delete(this.myAppUrl + "api/room/Delete/" + roomID).map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  errorHandler(error: Response)
  {
    console.log(error);
    return Observable.throw(error);
  }
}
