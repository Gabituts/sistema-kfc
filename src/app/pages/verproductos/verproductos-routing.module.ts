import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerproductosPage } from './verproductos.page';

const routes: Routes = [
  {
    path: '',
    component: VerproductosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerproductosPageRoutingModule {}
