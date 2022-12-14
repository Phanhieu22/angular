import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainScreenComponent } from './layout/main-screen/main-screen.component';

import { ListItemSideBarComponent } from './shared/component/sideBar/list-item-side-bar/list-item-side-bar.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { ColoumWithLabelsComponent } from './shared/charts/coloum-with-labels/coloum-with-labels.component';

// libary
import { NgApexchartsModule } from 'ng-apexcharts';
import { BasicChartsComponent } from './shared/charts/basic-charts/basic-charts.component';
import { SideBarComponent } from './shared/component/sideBar/side-bar/side-bar.component';
import { ItemSideBarComponent } from './shared/component/sideBar/item-side-bar/item-side-bar.component';
import { PrintInformationComponent } from './views/printAnalysis/print-information/print-information.component';
import { PrintCountComponent } from './views/printAnalysis/print-count/print-count.component';
import { PrintErrorAnalysisComponent } from './views/printAnalysis/print-error-analysis/print-error-analysis.component';
@NgModule({
  declarations: [
    AppComponent,
    MainScreenComponent,
    SideBarComponent,
    ItemSideBarComponent,
    ListItemSideBarComponent,
    DashboardComponent,
    ColoumWithLabelsComponent,
    BasicChartsComponent,
    PrintInformationComponent,
    PrintCountComponent,
    PrintErrorAnalysisComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    NgApexchartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
