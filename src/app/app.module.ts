import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {HolidayService} from "./holiday.service";
import {MatListModule} from '@angular/material/list';
import { RouterModule} from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';


import { AppComponent } from './app.component';
import { HolidayDetailComponent } from './holiday-detail/holiday-detail.component';
import { HolidayListComponent } from './holiday-list/holiday-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HolidayDetailComponent,
    HolidayListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatListModule,
    MatTableModule,
    MatButtonModule,
    RouterModule.forRoot([
         {
            path: 'holiday-list/holiday-detail/:date',
            component: HolidayDetailComponent
         },
         { path: 'holiday-list', component: HolidayListComponent },
         { path: '', redirectTo: '/holiday-list', pathMatch: 'full' }
      ])
  ],
  providers: [HolidayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
