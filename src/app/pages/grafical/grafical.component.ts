import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';


@Component({
  selector: 'app-grafical',
  templateUrl: './grafical.component.html',
  styles: [
  ]
})
export class GraficalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title1 : string='Sales'; 
  labels2 = ['crazy','crazy1','crazy2'];
  labels3 = ['happy','happy1','happy2'];
  dataValue2 = [{data:[20, 10, 80 ],backgroundColor:[ 'red', 'blue', 'green' ]}];
  dataValue3 = [{data:[500, 200, 200],backgroundColor:[ 'blue', 'black', 'yellow' ]}];
  chartData2: ChartData<'doughnut'> = {
    labels: this.labels2,
    datasets: this.dataValue2,      
  };
  chartData3: ChartData<'doughnut'> = {
    labels: this.labels3,
    datasets: this.dataValue3,        
  };
 /* get getdataset2()
  {
     return `${this.dataValue2}`;
  }*/
 
 /* get getchartData2()
  {
     return `${this.chartData2}`;
  }*/
}
