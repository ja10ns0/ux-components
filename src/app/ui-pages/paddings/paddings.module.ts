import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { MatTableModule } from '@angular/material';

import { PaddingsRoutingModule } from './paddings-routing.module';
import { DocumentationComponent } from './documentation/documentation.component';
import { ExamplesComponent } from './examples/examples.component';

@NgModule({
  imports: [
    CommonModule,
    PaddingsRoutingModule,
    MatTableModule
  ],
  declarations: [
    DocumentationComponent,
    ExamplesComponent
  ]
})
export class PaddingsModule { }
