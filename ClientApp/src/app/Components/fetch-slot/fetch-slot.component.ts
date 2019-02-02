import { Component } from "@angular/core";
import { Http } from "@angular/http";
import { Router } from "@angular/router";
import { SlotService } from "../../Services/slot.service";

@Component({
  selector: "app-fetch-slot",
  templateUrl: "./fetch-slot.component.html",
  styleUrls: ["./fetch-slot.component.css"]
})
export class FetchSlotComponent {
  slotList: SlotData[];

  constructor(public http: Http, private _router: Router, private _slotService: SlotService)
  {
    this.getSlots();
  }

  getSlots()
  {
    this._slotService.getSlots().subscribe(data => this.slotList = data);
  }

  delete(roomID)
  {
    const ans = confirm("Do you want to delete customer with Id: " + roomID);
    if(ans)
    {
      this._slotService.deleteSlot(roomID).subscribe((data) =>
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
