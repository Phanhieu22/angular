import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { PrintCountComponent } from './views/printAnalysis/print-count/print-count.component';
import { PrintErrorAnalysisComponent } from './views/printAnalysis/print-error-analysis/print-error-analysis.component';
import { PrintInformationComponent } from './views/printAnalysis/print-information/print-information.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },

  {
    path: 'printAnalysis/printAnalysisStatics',
    component: PrintInformationComponent,
  },
  {
    path: 'printAnalysis/printAnalysisCnt',
    component: PrintCountComponent,
  },
  {
    path: 'printAnalysis/printErrAnalysis',
    component: PrintErrorAnalysisComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
