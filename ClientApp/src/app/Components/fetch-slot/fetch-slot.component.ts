import { Component } from "@angular/core";
import { Http } from "@angular/http";
import { Router } from "@angular/router";
import { SlotService } from "../../Services/slot.service";
import { UserService } from "../../Services/user.service";

@Component({
  selector: "app-fetch-slot",
  templateUrl: "./fetch-slot.component.html",
  styleUrls: ["./fetch-slot.component.css"]
})
export class FetchSlotComponent {
  slotList: SlotData[];
  staffList: StaffData[];

  constructor(public http: Http, private _router: Router, private _slotService: SlotService, private _userService: UserService)
  {
    this.getSlots();
  }

  getSlots()
  {
      this._slotService.getSlots().subscribe(data => this.slotList = data);
      this._userService.getStaffs().subscribe(data => this.staffList = data);
  }

  delete(roomID, time)
  {
    const ans = confirm("Do you want to delete customer with Id: " + roomID + ", and this time: " + time);
    if(ans)
    {
      this._slotService.deleteSlot(roomID, time).subscribe((data) =>
        {
          this.getSlots();
        },
        error => console.error(error));
    }
  }

    cancelBooking(roomID, time)
    {
     const ans = confirm("Do you want to cancel booking with Id: " + roomID + ", and this time: " + time);
      if(ans)
      {
          this._slotService.cancelBooking(roomID, time).subscribe((data) =>
        {
          this.getSlots();
        },
        error => console.error(error));

      }
    }
  
}

interface SlotData {
  roomID: string;
  startTime: string;
  staffID: string;
  studentID: string;
}

interface StaffData {
  staffID: string;
  name: string;
  email: string;
}
