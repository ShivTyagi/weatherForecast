import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-wather-card',
  templateUrl: './wather-card.component.html',
  styleUrls: ['./wather-card.component.scss']
})
export class WatherCardComponent implements OnInit {
  public cardData:any;
  public dateObj : any = {};
  @Input() weatherData:any;
  
  constructor() { }

  ngOnInit(): void {
     this.cardData = this.weatherData;
     console.log(this.cardData);
     this.formateDate(this.cardData.datetime);
  }

   formateDate(dateString:any){
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let d = new Date(dateString);
    this.dateObj.dayName = days[d.getDay()];
    this.dateObj.monthName = months[d.getMonth()];
    this.dateObj.date = d.getDate();
    
  } 

}
