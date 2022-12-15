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
import { ConditionBoxModelAndRegionComponent } from './shared/component/condition-box-model-and-region/condition-box-model-and-region.component';
import { ConditionBoxMacAndAccountTypeComponent } from './shared/component/condition-box-mac-and-account-type/condition-box-mac-and-account-type.component';
import { ConditionBoxfindByPeriodTimeComponent } from './shared/component/condition-boxfind-by-period-time/condition-boxfind-by-period-time.component';
import { ConditionBoxfindByMonthComponent } from './shared/component/condition-boxfind-by-month/condition-boxfind-by-month.component';
import { ConditionFindPrintInfoComponent } from './shared/template/condition-find-print-info/condition-find-print-info.component';
import { PrintInforChildrenComponent } from './shared/template/print-infor-children/print-infor-children.component';
import { InputImageBoxComponent } from './shared/component/input-image-box/input-image-box.component';
import { ButtonSelectorImageBoxComponent } from './shared/component/button-selector-image-box/button-selector-image-box.component';
import { SearchAndSelectMutipleImageBoxComponent } from './shared/component/search-and-select-mutiple-image-box/search-and-select-mutiple-image-box.component';
import { ButtonImageBoxComponent } from './shared/component/button-image-box/button-image-box.component';
import { SearchInputImageBoxComponent } from './shared/component/search-input-image-box/search-input-image-box.component';
import { ItemInListImageBoxComponent } from './shared/component/item-in-list-image-box/item-in-list-image-box.component';
import { ListRadioImageBoxComponent } from './shared/component/list-radio-image-box/list-radio-image-box.component';
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
    ConditionBoxModelAndRegionComponent,
    ConditionBoxMacAndAccountTypeComponent,
    ConditionBoxfindByPeriodTimeComponent,
    ConditionBoxfindByMonthComponent,
    ConditionFindPrintInfoComponent,
    PrintInforChildrenComponent,
    InputImageBoxComponent,
    ButtonSelectorImageBoxComponent,
    SearchAndSelectMutipleImageBoxComponent,
    ButtonImageBoxComponent,
    SearchInputImageBoxComponent,
    ItemInListImageBoxComponent,
    ListRadioImageBoxComponent,
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
