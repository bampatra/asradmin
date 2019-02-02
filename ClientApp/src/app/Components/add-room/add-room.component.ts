import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { RoomService } from "../../Services/room.service";

@Component({
  selector: "app-add-room",
  templateUrl: "./add-room.component.html",
  styleUrls: ["./add-room.component.css"]
})
export class AddRoomComponent implements OnInit {
  roomForm: FormGroup;
  title: string = "Create";
  roomID: string;
  errorMessage: any;

  constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute, private _employeeService: RoomService,
    private _router: Router)
  {
    if(this._avRoute.snapshot.params["id"])
    {
      this.roomID = this._avRoute.snapshot.params["id"];
    }
   
    this.roomForm = this._fb.group({
      roomID: ["", [Validators.required]]
    });
  }

  ngOnInit()
  {
    if(this.roomID != null)
    {
      this.title = "Edit";
      this._employeeService.getRoomById(this.roomID).subscribe(resp => this.roomForm.setValue(resp),
        error => this.errorMessage = error);
    }
  }

  save()
  {
    if(!this.roomForm.valid)
    {
      return;
    }
    if(this.title === "Create")
    {
      this._employeeService.saveRoom(this.roomForm.value).subscribe((data) => {
        this._router.navigate(["/fetch-room"]);
      }, error => this.errorMessage = error);
    }
    else if(this.title === "Edit")
    {
      this._employeeService.updateRoom(this.roomForm.value).subscribe((data) => {
        this._router.navigate(["/fetch-room"]);
      }, error => this.errorMessage = error);
    }
  }

  cancel()
  {
    this._router.navigate(["/fetch-room"]);
  }

  get id()
  {
      return this.roomForm.get("roomID");
   }

}
