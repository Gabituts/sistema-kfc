import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//forms
import { FormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { RegisterPageRoutingModule } from './register-routing.module';

import { RegisterPage } from './register.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPageRoutingModule,
    SharedModule
  ],
  declarations: [RegisterPage]
})
export class RegisterPageModule {}

