import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material';
import { NtxSharedModule } from '../ntx-shared/ntx-shared.module';

import { NtxFormsRoutingModule } from './ntx-forms-routing.module';
import { FormInputComponent } from './form-input/form-input.component';
import { FormTextareaComponent } from './form-textarea/form-textarea.component';
import { FormDatepickerComponent } from './form-datepicker/form-datepicker.component';
import { FormCheckboxComponent } from './form-checkbox/form-checkbox.component';
import { FormRadiobuttonComponent } from './form-radiobutton/form-radiobutton.component';
import { FormSlidetoggleComponent } from './form-slidetoggle/form-slidetoggle.component';
import { FormCheckboxCircleComponent } from './form-checkbox-circle/form-checkbox-circle.component';
import { FormSliderComponent } from './form-slider/form-slider.component';
import { FormSelectComponent } from './form-select/form-select.component';
import { FormSelectButtonComponent } from './form-select-button/form-select-button.component';
import { FormSelectNoBorderComponent } from './form-select-no-border/form-select-no-border.component';
import { FormSelectBorderButtonComponent } from './form-select-border-button/form-select-border-button.component';
import { FormInputNoLabelComponent } from './form-input-no-label/form-input-no-label.component';
import { FormSearchboxComponent } from './form-searchbox/form-searchbox.component';
import { FormSearchboxBackgroundComponent } from './form-searchbox-background/form-searchbox-background.component';
import { FormSelectThinComponent } from './form-select-thin/form-select-thin.component';
import { FormInputAutocompleteComponent } from './form-input-autocomplete/form-input-autocomplete.component';

@NgModule({
  imports: [
    CommonModule,
    NtxSharedModule,
    NtxFormsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule
  ],
  declarations: [
    FormInputComponent,
    FormTextareaComponent,
    FormDatepickerComponent,
    FormCheckboxComponent,
    FormRadiobuttonComponent,
    FormSlidetoggleComponent,
    FormCheckboxCircleComponent,
    FormSliderComponent,
    FormSelectComponent,
    FormSelectButtonComponent,
    FormSelectNoBorderComponent,
    FormSelectBorderButtonComponent,
    FormInputNoLabelComponent,
    FormSearchboxComponent,
    FormSearchboxBackgroundComponent,
    FormSelectThinComponent,
    FormInputAutocompleteComponent
  ],
  entryComponents: [
    FormInputComponent,
    FormDatepickerComponent
  ],
  exports: [
    FormInputComponent,
    FormTextareaComponent,
    FormDatepickerComponent,
    FormCheckboxComponent,
    FormRadiobuttonComponent,
    FormSlidetoggleComponent,
    FormCheckboxCircleComponent,
    FormSliderComponent,
    FormSelectComponent,
    FormSelectButtonComponent,
    FormSelectNoBorderComponent,
    FormSelectBorderButtonComponent,
    FormInputNoLabelComponent,
    FormSearchboxComponent,
    FormSearchboxBackgroundComponent,
    FormSelectThinComponent,
    FormInputAutocompleteComponent
  ]
})
export class NtxFormsModule { }
