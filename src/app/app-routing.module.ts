import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { PrintCountComponent } from './views/printAnalysis/print-count/print-count.component';
import { PrintErrorAnalysisComponent } from './views/printAnalysis/print-error-analysis/print-error-analysis.component';
import { PrintInformationComponent } from './views/printAnalysis/print-information/print-information.component';
import { LoginComponent } from './views/auth/login/login.component';
import { MainScreenComponent } from './layout/main-screen/main-screen.component';

const routes: Routes = [
  {
    path: '',
    component: MainScreenComponent,
    children: [
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
    ],
  },

  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
