import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficalComponent } from './grafical/grafical.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';



const routes: Routes = [
    {
    path:'dashboard', 
      component: PagesComponent,
      children: [
        {path:'', component:DashboardComponent, data :{title:'Dashboard'}},
        {path:'progress', component:ProgressComponent, data :{title:'Progress Bar'}},
        {path:'grafical',component:GraficalComponent, data :{title:'Grafical'}},
        {path:'account-settings',component:AccountSettingsComponent, data :{title:'Account Settings'}},
        {path:'promises', component:PromisesComponent, data :{title:'Promises'}},
        {path:'rxjs', component:RxjsComponent, data :{title:'Rxjs'}},
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
  