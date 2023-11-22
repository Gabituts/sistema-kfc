import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthPage } from './auth.page';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { NoAuthGuard } from 'src/app/guards/no-auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AuthPage
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registrarse',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthPageRoutingModule {}
