import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { SlotService } from "../../Services/slot.service";
import { RoomService } from "../../Services/room.service";
import { UserService } from "../../Services/user.service";

@Component({
  selector: "app-add-slot",
  templateUrl: "./add-slot.component.html",
  styleUrls: ["./add-slot.component.css"]
})
export class AddSlotComponent implements OnInit {
  slotForm: FormGroup;
  title: string = "Create";
  roomId: string;
  time: Date;
  errorMessage: any;
  roomList: Array<any> = [];
  staffList: Array<any> = [];
  studentList: Array<any> = [];

  constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute, private _employeeService: SlotService,
    private _router: Router)
  {

    if(this._avRoute.snapshot.params["id"])
    {
        this.roomId = this._avRoute.snapshot.params["id"];
        this.time = this._avRoute.snapshot.params["time"];
    }
   
    this.slotForm = this._fb.group({
        roomID: ["", [Validators.required]],
        room: ["", [Validators.required]],
        startTime: ["", [Validators.required]],
        staffID: ["", [Validators.required]],
        staff: ["", [Validators.required]],
        studentID: ["", [Validators.required]],
        student: ["", [Validators.required]],
        });
        
  }

  ngOnInit()
  {
    /** this._roomService.getRooms().subscribe(data => this.roomList = data);
    this._userService.getStaffs().subscribe(data => this.staffList = data);
    this._userService.getStudents().subscribe(data => this.studentList = data); */

    if(this.roomId != null)
    {
      this.title = "Edit";
      this._employeeService.getSlotById(this.roomId, this.time).subscribe(resp => this.slotForm.setValue(resp),
        error => this.errorMessage = error);
    }
  }

  save()
  {
    if(this.title === "Create")
    {
      this._employeeService.saveSlot(this.slotForm.value).subscribe((data) => {
        this._router.navigate(["/fetch-slot"]);
      }, error => this.errorMessage = error);
    }
    else if(this.title === "Edit")
    {
      this._employeeService.updateSlot(this.slotForm.value).subscribe((data) => {
        this._router.navigate(["/fetch-slot"]);
      }, error => this.errorMessage = error);
    }
  }

  cancel()
  {
    this._router.navigate(["/fetch-slot"]);
  }

  get id()
  {
      return this.slotForm.get("roomID");
  }

  get startTime()
  {
      return this.slotForm.get("startTime");
  }

  get staff()
  {
      return this.slotForm.get("staffID");
  }

  get student()
  {
      return this.slotForm.get("studentID");
  }

}

interface RoomList {
    roomID: string;
}