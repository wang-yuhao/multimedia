import { Component } from '@angular/core';
 
export interface Semester {
  value: any;
  viewValue: string;
}

@Component({
  selector: 'mmn-statistics',
  templateUrl: './mmn-statistics.component.html',
})
export class MmnStatisticsComponent {

  semesters: Semester[] = [
    {value: 0, viewValue: 'WS 18/19'},
    {value: 1, viewValue: 'WS 17/18'},
    {value: 2, viewValue: 'WS 16/17'}
  ];

  
  // lineChart
  
  public lineChartData_:Array<any> = [[
    {data: [28,25,22,18,15,11,10,5], label: 'major subject'},
    {data: [5,3,2,4,3,2,1], label: 'minor subject'}
  ],
  [
    {data: [28,23,12,16,13,14,10,10,3,10,10,6], label: 'major subject'},
    {data: [2,1,3,0,3,2,2,1,2,2,0,1], label: 'minor subject'}
  ],
  [
    {data: [62,38,22,31,20,19,18,12,11,23,15,18], label: 'major subject'},
    {data: [11,8,12,6,7,6,8,7,4,6,4,6], label: 'minor subject'}
  ]];


  public lineChartData = this.lineChartData_[0];
  change(event){
    if(event.isUserInput){
      console.log(event.source.value);
      this.lineChartData = [];
      this.lineChartData = this.lineChartData_[event.source.value];
      // console.log(this.lineChartData);
      // console.log(this.lineChartData_);
      
    }
 
  }
  
  public lineChartLabels:Array<any> = ['Blatt 1', 'Blatt 2', 'Blatt 3', 'Blatt 4', 'Blatt 5', 'Blatt 6', 'Blatt 7', 'Blatt 8', 'Blatt 9', 'Blatt 10', 'Blatt 11', 'Blatt 12'];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
 
  // public randomize():void {
  //   let _lineChartData:Array<any> = new Array(this.lineChartData.length);
  //   for (let i = 0; i < this.lineChartData.length; i++) {
  //     _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
  //     for (let j = 0; j < this.lineChartData[i].data.length; j++) {
  //       _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
  //     }
  //   }
  //   this.lineChartData = _lineChartData;
  // }
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}