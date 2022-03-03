import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormPage } from './form.page';

const routes: Routes = [
  {
    path: '',
    component: FormPage
  },
  {
    path: 'inputs',
    loadChildren: () => import('./inputs/inputs.module').then( m => m.InputsPageModule)
  },
  {
    path: 'textarea',
    loadChildren: () => import('./textarea/textarea.module').then( m => m.TextareaPageModule)
  },
  {
    path: 'checkbox',
    loadChildren: () => import('./checkbox/checkbox.module').then( m => m.CheckboxPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormPageRoutingModule {}
