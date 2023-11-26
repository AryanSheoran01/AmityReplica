import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-chart2',
  templateUrl: './chart2.component.html',
  styleUrls: ['./chart2.component.css']
})
export class Chart2Component {
  [x: string]: any;
  title = 'ng2-charts-demo';
  
  
  

  public doughnutChartLabels: string[] = [ 'All-Gwalior','All-Jaipur','All-Lucknow','All-Mumbai','All-Gurugram','All-Raipur' ];
  public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [
    {
      data: [0,15,40,0,40,15],
      label: '',      
      backgroundColor: ['#9A0E2A','#EA728A','#82D6D9','#674ea7','#ffad5e','#85bf6a',],
      
      
      
    },
    
      
      
      
    ];

  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: false,
    cutout: 80,
    
    
    
  };

  constructor() {
  }

}






