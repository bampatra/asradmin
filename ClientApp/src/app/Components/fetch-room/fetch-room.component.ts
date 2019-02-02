import { Component } from "@angular/core";
import { Http } from "@angular/http";
import { Router } from "@angular/router";
import { RoomService } from "../../Services/room.service";

@Component({
  selector: "app-fetch-room",
  templateUrl: "./fetch-room.component.html",
  styleUrls: ["./fetch-room.component.css"]
})
export class FetchRoomComponent {
  roomList: RoomData[];

  constructor(public http: Http, private _router: Router, private _roomService: RoomService)
  {
    this.getRooms();
  }

  getRooms()
  {
    this._roomService.getRooms().subscribe(data => this.roomList = data);
  }

  delete(roomID)
  {
    const ans = confirm("Do you want to delete customer with Id: " + roomID);
    if(ans)
    {
      this._roomService.deleteRoom(roomID).subscribe((data) =>
        {
          this.getRooms();
        },
        error => console.error(error));
    }
  }
}

interface RoomData {
  roomID: string;
}
