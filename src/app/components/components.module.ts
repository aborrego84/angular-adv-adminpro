import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IncrementatorComponent } from './incrementator/incrementator.component';
import { ChartsComponent } from './charts/charts.component';
import { NgChartsModule } from 'ng2-charts';




@NgModule({
  declarations: [
    IncrementatorComponent,
    ChartsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgChartsModule
  ],
  exports: [
    IncrementatorComponent,
    ChartsComponent
  ]
})
export class ComponentsModule { }
