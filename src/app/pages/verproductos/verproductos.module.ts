import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerproductosPageRoutingModule } from './verproductos-routing.module';

import { VerproductosPage } from './verproductos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerproductosPageRoutingModule
  ],
  declarations: [VerproductosPage]
})
export class VerproductosPageModule {}
