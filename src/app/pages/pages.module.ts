import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficalComponent } from './grafical/grafical.component';
import { PagesComponent } from './pages.component';
import { NgChartsModule } from 'ng2-charts';
//import { ChartsModule } from '@rinminase/ng-charts';







@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    GraficalComponent,
    PagesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgChartsModule,
    ComponentsModule,
    RouterModule,
    SharedModule,    
  ],
  exports:[
    DashboardComponent,
    ProgressComponent,
    GraficalComponent,
    PagesComponent,
  ]
})
export class PagesModule { }
