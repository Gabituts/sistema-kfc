import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablaProductosPage } from './tabla-productos.page';

const routes: Routes = [
  {
    path: '',
    component: TablaProductosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablaProductosPageRoutingModule {}
