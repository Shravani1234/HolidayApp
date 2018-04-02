import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HolidayService} from "../holiday.service";
import {Location} from '@angular/common';

@Component({
  selector: 'app-holiday-detail',
  templateUrl: './holiday-detail.component.html',
  styleUrls: ['./holiday-detail.component.css']
})
export class HolidayDetailComponent implements OnInit {
      private holidayDetail : any = [];
      private date : any;

  constructor(private route: ActivatedRoute, public service: HolidayService, private location: Location) { }

  public getDetail(){
    this.service.getRequest().subscribe(data =>{
        this.holidayDetail = data.holidays[this.date];
    });
  }
  public goBack(){
    this.location.back();
  }

  ngOnInit() {
    this.date = this.route.snapshot.paramMap.get('date');
    this.getDetail();
  }

}
