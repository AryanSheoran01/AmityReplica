import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']

})
export class ChartComponent {
[x: string]: any;
  title = 'ng2-charts-demo';

  public doughnutChartLabels: string[] = [ 'Virtual','Physical' ];
  public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [
    {
      data: [59, 39],
      label: '',      
      backgroundColor: ['#e94f76', '#6eace5'],
      
      
      
    },
    
      
      
      
    ];

  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: false,
    cutout: 80,
    
    
  };

  constructor() {
  }

}



