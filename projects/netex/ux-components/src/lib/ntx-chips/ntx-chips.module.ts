import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NtxSharedModule } from '../ntx-shared/ntx-shared.module';

import { NtxChipsRoutingModule } from './ntx-chips-routing.module';
import { BasicChipComponent } from './basic-chip/basic-chip.component';
import { CategoryChipComponent } from './category-chip/category-chip.component';
import { ImageChipComponent } from './image-chip/image-chip.component';
import { FilterChipComponent } from './filter-chip/filter-chip.component';
import { ImageSubtitleChipComponent } from './image-subtitle-chip/image-subtitle-chip.component';

@NgModule({
  imports: [
    CommonModule,
    NtxSharedModule,
    NtxChipsRoutingModule
  ],
  declarations: [
    BasicChipComponent,
    CategoryChipComponent,
    ImageChipComponent,
    FilterChipComponent,
    ImageSubtitleChipComponent
  ],
  exports: [
    BasicChipComponent,
    CategoryChipComponent,
    ImageChipComponent,
    FilterChipComponent,
    ImageSubtitleChipComponent
  ]
})
export class NtxChipsModule { }
