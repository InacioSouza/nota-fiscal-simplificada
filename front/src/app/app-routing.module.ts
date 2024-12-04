import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent, ResetPasswordFormComponent, CreateAccountFormComponent, ChangePasswordFormComponent } from './shared/components';
import { AuthGuardService } from './shared/services';
import { HomeComponent } from './pages/home/home.component';
import { DxDataGridModule, DxFormModule } from 'devextreme-angular';
import { SelectBoxComponent } from './pages/select-box/select-box.component';
import { NotaComponent } from './pages/nota/nota.component';
import { CadastraNotaComponent } from './layouts/crud-nota/components/cadastra-nota/cadastra-nota.component';
import { ListaNotaComponent } from './layouts/crud-nota/components/lista-nota/lista-nota.component';
import { ListaProdutoComponent } from './pages/produto/components/lista-produto/lista-produto.component';
import { ListaClienteComponent } from './pages/cliente/components/lista-cliente/lista-cliente.component';

const routes: Routes = [
  {
    path: 'select-box',
    component: SelectBoxComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'produto',
    component: ListaProdutoComponent
  },
  {
    path: 'cliente',
    component: ListaClienteComponent
  },
  {
    path: 'nota',
    component: NotaComponent,
    children: [
      {
        path: 'cadastra-nota',
        component: CadastraNotaComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'lista-nota',
        component: ListaNotaComponent,
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
  imports: [RouterModule.forRoot(routes, { useHash: true }), DxDataGridModule, DxFormModule],
  providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: [
    HomeComponent
  ]
})
export class AppRoutingModule { }
