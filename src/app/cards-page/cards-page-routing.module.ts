import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardsPageComponent } from './cards-page.component';

const routes: Routes = [
  {
    path: '',
    component: CardsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardsPageRoutingModule { }
