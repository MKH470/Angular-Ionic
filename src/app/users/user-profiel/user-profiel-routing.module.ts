import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserProfielPage } from './user-profiel.page';

const routes: Routes = [
  {
    path: '',
    component: UserProfielPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserProfielPageRoutingModule {}
