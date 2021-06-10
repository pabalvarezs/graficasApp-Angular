import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  constructor( private graficasService : GraficasService) { }

  ngOnInit(): void {
  
    this.graficasService.getUsuariosRedesSociales()
      .subscribe( data => {

        // console.log(data);

        const labels = Object.keys(data)
        const values = Object.values(data)
        this.doughnutChartLabels = labels;
        this.doughnutChartData.push(values);
        
      })
  
  }

  public doughnutChartLabels: Label[] = [
    // 'Download Sales', 'In-Store Sales', 'Mail-Order Sales','Others'
  ];
  public doughnutChartData: MultiDataSet = [
    // [350, 450, 100, 159],
 
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
