import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TablaProductosPageRoutingModule } from './tabla-productos-routing.module';

import { TablaProductosPage } from './tabla-productos.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TablaProductosPageRoutingModule,
    SharedModule
  ],
  declarations: [TablaProductosPage]
})
export class TablaProductosPageModule {}
