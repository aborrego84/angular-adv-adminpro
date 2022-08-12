import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficalComponent } from './grafical/grafical.component';



const routes: Routes = [
    {
    path:'dashboard', 
      component: PagesComponent,
      children: [
        {path:'', component:DashboardComponent},
        {path:'progress', component:ProgressComponent},
        {path:'grafical',component:GraficalComponent},
       ]
    },    
  ];
  
  @NgModule({
    declarations: [],
    imports: [
      RouterModule.forChild(routes),
      CommonModule
    ],
    exports:[RouterModule]
  })
  export class PagesRoutingModule { }
  