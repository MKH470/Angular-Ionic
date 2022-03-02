import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoadingControllerPageRoutingModule } from './loading-controller-routing.module';

import { LoadingControllerPage } from './loading-controller.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoadingControllerPageRoutingModule
  ],
  declarations: [LoadingControllerPage]
})
export class LoadingControllerPageModule {}
