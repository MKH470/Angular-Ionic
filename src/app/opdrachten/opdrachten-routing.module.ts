import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpdrachtenPage } from './opdrachten.page';

const routes: Routes = [
  {
    path: '',
    component: OpdrachtenPage
  },
  {
    path: 'button',
    loadChildren: () => import('./button/button.module').then( m => m.ButtonPageModule)
  },
  {
    path: 'card',
    loadChildren: () => import('./card/card.module').then( m => m.CardPageModule)
  },
  {
    path: 'fab',
    loadChildren: () => import('./fab/fab.module').then( m => m.FabPageModule)
  },
  {
    path: 'item',
    loadChildren: () => import('./item/item.module').then( m => m.ItemPageModule)
  },
  {
    path: 'chip',
    loadChildren: () => import('./chip/chip.module').then( m => m.ChipPageModule)
  },
  {
    path: 'item-sliding',
    loadChildren: () => import('./item-sliding/item-sliding.module').then( m => m.ItemSlidingPageModule)
  },
  {
    path: 'media',
    loadChildren: () => import('./media/media.module').then( m => m.MediaPageModule)
  },
  {
    path: 'spinner',
    loadChildren: () => import('./spinner/spinner.module').then( m => m.SpinnerPageModule)
  },
  {
    path: 'skeleton',
    loadChildren: () => import('./skeleton/skeleton.module').then( m => m.SkeletonPageModule)
  },
  {
    path: 'progress-bar',
    loadChildren: () => import('./progress-bar/progress-bar.module').then( m => m.ProgressBarPageModule)
  },
  {
    path: 'refresher',
    loadChildren: () => import('./refresher/refresher.module').then( m => m.RefresherPageModule)
  },
  {
    path: 'reorder',
    loadChildren: () => import('./reorder/reorder.module').then( m => m.ReorderPageModule)
  },
  {
    path: 'loading-controller',
    loadChildren: () => import('./loading-controller/loading-controller.module').then( m => m.LoadingControllerPageModule)
  },
  {
    path: 'toast',
    loadChildren: () => import('./toast/toast.module').then( m => m.ToastPageModule)
  },
  {
    path: 'action-sheet',
    loadChildren: () => import('./action-sheet/action-sheet.module').then( m => m.ActionSheetPageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./alert/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: 'form',
    loadChildren: () => import('./form/form.module').then( m => m.FormPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpdrachtenPageRoutingModule {}
