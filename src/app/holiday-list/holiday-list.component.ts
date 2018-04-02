import { Component, OnInit } from '@angular/core';
import {HolidayService} from "../holiday.service";

@Component({
  selector: 'app-holiday-list',
  templateUrl: './holiday-list.component.html',
  styleUrls: ['./holiday-list.component.css']
})
export class HolidayListComponent implements OnInit {
      private holidays : any = [];
      public position: number;

  constructor( public service: HolidayService) { }

  public getList(){
    this.service.getRequest().subscribe(data =>{
        this.holidays = Object.keys(data["holidays"]);
    });
  }

  ngOnInit() {
    this.getList();
  }

}
