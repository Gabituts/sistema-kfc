import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerproductosPageRoutingModule } from './verproductos-routing.module';

import { VerproductosPage } from './verproductos.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerproductosPageRoutingModule,
    SharedModule
  ],
  declarations: [VerproductosPage]
})
export class VerproductosPageModule {}
