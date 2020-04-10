import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { WjGridModule } from 'wijmo/wijmo.angular2.grid';
import { WjGridFilterModule } from 'wijmo/wijmo.angular2.grid.filter';
import { WjGridMultirowModule } from 'wijmo/wijmo.angular2.grid.multirow';
import { WjGridSheetModule } from 'wijmo/wijmo.angular2.grid.sheet';
import { WjInputModule } from 'wijmo/wijmo.angular2.input';
import { WjNavModule } from 'wijmo/wijmo.angular2.nav';
import { WjChartModule } from 'wijmo/wijmo.angular2.chart';
import { WjChartAnalyticsModule } from 'wijmo/wijmo.angular2.chart.analytics';
import { WjChartFinanceModule } from 'wijmo/wijmo.angular2.chart.finance';
import { WjChartHierarchicalModule } from 'wijmo/wijmo.angular2.chart.hierarchical';
import { WjChartInteractionModule } from 'wijmo/wijmo.angular2.chart.interaction';
import { WjChartRadarModule } from 'wijmo/wijmo.angular2.chart.radar';
import { WjOlapModule } from 'wijmo/wijmo.angular2.olap';
import { WjGaugeModule } from 'wijmo/wijmo.angular2.gauge';
import { WjViewerModule } from 'wijmo/wijmo.angular2.viewer';

import { SampleOneComponent } from './pages/sample-one/sample-one.component';

@NgModule({
  imports: [
    BrowserModule, FormsModule,
    WjGridModule,
    WjGridFilterModule,
    WjGridMultirowModule,
    WjGridSheetModule,
    WjInputModule,
    WjNavModule,
    WjChartModule,
    WjChartAnalyticsModule,
    WjChartFinanceModule,
    WjChartHierarchicalModule,
    WjChartInteractionModule,
    WjChartRadarModule,
    WjOlapModule,
    WjGaugeModule,
    WjViewerModule,
  ],
  declarations: [AppComponent, HelloComponent, SampleOneComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
