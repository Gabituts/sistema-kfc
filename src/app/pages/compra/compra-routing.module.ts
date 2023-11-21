import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompraPage } from './compra.page';

const routes: Routes = [
  {
    path: '',
    component: CompraPage
  },
  {
    path: 'carrito',
    loadChildren: () => import('./carrito/carrito.module').then( m => m.CarritoPageModule)
  },
  {
    path: 'ticket',
    loadChildren: () => import('./ticket/ticket.module').then( m => m.TicketPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompraPageRoutingModule {}
