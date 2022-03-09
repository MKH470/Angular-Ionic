import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserProfielPageRoutingModule } from './user-profiel-routing.module';

import { UserProfielPage } from './user-profiel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserProfielPageRoutingModule
  ],
  declarations: [UserProfielPage]
})
export class UserProfielPageModule {}
