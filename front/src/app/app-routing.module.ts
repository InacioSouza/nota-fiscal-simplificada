import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent, ResetPasswordFormComponent, CreateAccountFormComponent, ChangePasswordFormComponent } from './shared/components';
import { AuthGuardService } from './shared/services';
import { HomeComponent } from './pages/home/home.component';
import { DxDataGridModule, DxFormModule } from 'devextreme-angular';
import { LocalidadeComponent } from './shared/components/localidade/localidade.component';
import { SelectBoxComponent } from './pages/select-box/select-box.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { CrudClienteModule } from './layouts/crud-cliente/crud-cliente.module';
import { CadastraClienteComponent } from './layouts/crud-cliente/components/cadastra-cliente/cadastra-cliente.component';
import { ListaClienteComponent } from './layouts/crud-cliente/components/lista-cliente/lista-cliente.component';

const routes: Routes = [
  {
    path: 'select-box',
    component: SelectBoxComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'cliente',
    component: ClienteComponent,
    children: [
      {
        path: 'lista-cliente',
        component: ListaClienteComponent,
        canActivate: [AuthGuardService]
      },

      {
        path: 'cadastra-cliente',
        component: CadastraClienteComponent,
        canActivate: [AuthGuardService]
      }
    ],
    canActivate: [AuthGuardService]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'login-form',
    component: LoginFormComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'reset-password',
    component: ResetPasswordFormComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'create-account',
    component: CreateAccountFormComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'change-password/:recoveryCode',
    component: ChangePasswordFormComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true }), DxDataGridModule, DxFormModule, CrudClienteModule],
  providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: [
    HomeComponent
  ]
})
export class AppRoutingModule { }
