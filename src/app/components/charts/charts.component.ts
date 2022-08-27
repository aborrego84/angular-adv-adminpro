import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styles: [
  ]
})
export class ChartsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() title: string = 'No title';
  //@Input('chartTypeReal') chartTypeReal: string = 'doughnut';
  //@Input('chartDataValue') chartDataValue: number[] = [350, 450, 100 ];
  //@Input('chartbackgroundColors') chartbackgroundColors: Array<any> = [ '#6857E6', '#009FEE', '#F02059' ];
  @Input('labels') labels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  @Input() data1 = [{data : [350, 450, 100], backgroundColor: ['#6857E6', '#009FEE', '#F02059']}];
  @Input() chartData: ChartData<'doughnut'> = {
    labels: this.labels,
    datasets:this.data1
  };
  @Input('chartType') chartType: ChartType = 'doughnut';
 

}
