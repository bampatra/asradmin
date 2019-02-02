import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';

import { RoomService } from './Services/room.service';
import { FetchRoomComponent } from './Components/fetch-room/fetch-room.component';
import { AddRoomComponent } from './Components/add-room/add-room.component';

import { SlotService } from './Services/slot.service';
import { FetchSlotComponent } from './Components/fetch-slot/fetch-slot.component';
import { AddSlotComponent } from './Components/add-slot/add-slot.component';

import { UserService } from './Services/user.service';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    FetchRoomComponent,
    FetchSlotComponent,
    AddRoomComponent,
    AddSlotComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    HttpModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'fetch-room', component: FetchRoomComponent },
      { path: 'add-room', component: AddRoomComponent },
      { path: "room/edit/:id", component: AddRoomComponent },
      { path: 'fetch-slot', component: FetchSlotComponent },
      { path: 'add-slot', component: AddSlotComponent },
      { path: "slot/edit/:id/:time", component: AddSlotComponent },
    ])
  ],
  providers: [RoomService, SlotService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
