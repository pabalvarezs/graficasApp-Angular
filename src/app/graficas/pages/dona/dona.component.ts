import { Component } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales','Others'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100, 159],
 
  ];
  public doughnutChartType: ChartType = 'doughnut';
  public colors: Color[]= [
    { backgroundColor: [
      '#F0D339',
      '#F75E16',
      '#DA1FE0',
      '#1643F7',
      '#4AF0B5'
      ]
    }
  ]

}
