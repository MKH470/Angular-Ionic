import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { CKEditorModule } from 'ng2-ckeditor';
import { FormsModule } from '@angular/forms';
import { HomePageRoutingModule } from './home-routing.module';
import { QuillModule } from 'ngx-quill';

@NgModule({
  imports: [
    CommonModule,
    // FormsModule,
    CKEditorModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    // ReactiveFormsModule,
    QuillModule,
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
