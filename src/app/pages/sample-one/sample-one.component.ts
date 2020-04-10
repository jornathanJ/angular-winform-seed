import { Component, OnInit, AfterViewInit } from '@angular/core';



import * as Plotly from 'plotly.js-dist';

@Component({
  selector: 'app-sample-one',
  templateUrl: './sample-one.component.html',
  styleUrls: ['./sample-one.component.css']
})
export class SampleOneComponent implements OnInit {

  uuid: string = "test1234"; 
  divPlotly: Plotly.PlotlyHTMLElement;

  layout: any;
  config: any;

  data: any;
  wijmoData: any;

  constructor() {
    this.data = [
      { x: 0, y: 0 },
      { x: 1, y: 1 },
      { x: 2, y: 2 },
      { x: 3, y: 3 },
      { x: 4, y: 4 },
      { x: 5, y: 5 },
      { x: 6, y: 6 },
      { x: 7, y: 7 },
      { x: 8, y: 8 },
      { x: 9, y: 9 },
    ];
  }

  ngOnInit() {
  }

  
  formatItem(flex, event){
  }

  gridInit(flex){
  }

  drawChart() {
    let xValue: number[] = [];
    let yValue: number[] = [];

    for (let data of this.data) {
      xValue.push(data.x);
      yValue.push(data.y);
    }

    var trace1 = {
      x: xValue,
      y: yValue,
      // line: {
      //   dash: 'solid',
      //   shape: 'linear'
      // },
      //mode: 'lines+markers',
      type: 'scatter'
    };

    Plotly.newPlot(
      this.uuid,
      [trace1],
      //this.layout,
      //this.config
    );
  }

  bindDataToGrid() {
    this.wijmoData = this.data;
  }

  clear() {
    this.wijmoData = null;
    Plotly.react(this.uuid,
      [],
      this.layout,
      this.config
    );
  }

  ngAfterViewInit() {
    this.divPlotly = <Plotly.PlotlyHTMLElement>document.getElementById(this.uuid);
  }


}