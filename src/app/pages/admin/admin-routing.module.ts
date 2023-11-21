import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPage } from './admin.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPage
  },
  {
    path: 'nuevo-producto',
    loadChildren: () => import('./nuevo-producto/nuevo-producto.module').then( m => m.NuevoProductoPageModule)
  },
  {
    path: 'tabla-productos',
    loadChildren: () => import('./tabla-productos/tabla-productos.module').then( m => m.TablaProductosPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule {}
