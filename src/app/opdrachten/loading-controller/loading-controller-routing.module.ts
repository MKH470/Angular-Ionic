import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoadingControllerPage } from './loading-controller.page';

const routes: Routes = [
  {
    path: '',
    component: LoadingControllerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoadingControllerPageRoutingModule {}
