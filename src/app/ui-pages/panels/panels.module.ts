import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PanelsDocComponent } from './documentation/panels-doc.component';
import { PanelsExamplesComponent } from './examples/panels-examples.component';
import { PanelsRoutingModule } from './panels-routing.module';
import { PanelContentComponent } from './panel-content/panel-content.component';
import { MatIconModule, MatToolbarModule, MatButtonModule, MatDividerModule } from '@angular/material';

import {
  NtxCardsModule,
  NtxButtonsModule,
  NtxTabsModule
} from '@netex/ux-components';




@NgModule({
  imports: [
    CommonModule,
    PanelsRoutingModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatToolbarModule,
    NtxCardsModule,
    NtxButtonsModule,
    NtxTabsModule
  ],
  declarations: [
      PanelsDocComponent,
      PanelsExamplesComponent,
      PanelContentComponent
  ],
  entryComponents: [
    PanelContentComponent
  ]
})
export class PanelsModule { }
