import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpdrachtenPageRoutingModule } from './opdrachten-routing.module';

import { OpdrachtenPage } from './opdrachten.page';
import { ModalPageModule } from './modal/modal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpdrachtenPageRoutingModule,
    ModalPageModule,
  ],
  declarations: [OpdrachtenPage],
})
export class OpdrachtenPageModule {}
