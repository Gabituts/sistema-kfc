import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TablaProductosPageRoutingModule } from './tabla-productos-routing.module';

import { TablaProductosPage } from './tabla-productos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TablaProductosPageRoutingModule
  ],
  declarations: [TablaProductosPage]
})
export class TablaProductosPageModule {}
