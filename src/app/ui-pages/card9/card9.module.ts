import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Card9RoutingModule } from './card9-routing.module';
import { DocumentationComponent } from './documentation/documentation.component';
import { ExamplesComponent } from './examples/examples.component';

import {
  NtxCardsModule
} from '@netex/ux-components';

@NgModule({
  imports: [
    CommonModule,
    NtxCardsModule,
    Card9RoutingModule
  ],
  declarations: [DocumentationComponent, ExamplesComponent]
})
export class Card9Module { }
