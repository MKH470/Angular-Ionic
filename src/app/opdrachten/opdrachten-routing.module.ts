import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpdrachtenPage } from './opdrachten.page';

const routes: Routes = [
  {
    path: '',
    component: OpdrachtenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpdrachtenPageRoutingModule {}
