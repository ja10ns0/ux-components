import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NtxSharedModule } from '../ntx-shared/ntx-shared.module';

import { NtxLabelsRoutingModule } from './ntx-labels-routing.module';
import { LabelComponent } from './label/label.component';
import { LabelErrorComponent } from './label-error/label-error.component';

@NgModule({
  declarations: [LabelComponent, LabelErrorComponent],
  imports: [
    CommonModule,
    NtxLabelsRoutingModule,
    NtxSharedModule
  ],
  exports: [
    LabelComponent,
    LabelErrorComponent
  ]
})
export class NtxLabelsModule { }
