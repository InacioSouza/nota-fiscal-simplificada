import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DxHttpModule } from 'devextreme-angular/http';
import { DxSelectBoxModule } from 'devextreme-angular';

import { SideNavOuterToolbarModule, SideNavInnerToolbarModule, SingleCardModule } from './layouts';
import { FooterModule, ResetPasswordFormModule, CreateAccountFormModule, ChangePasswordFormModule, LoginFormModule } from './shared/components';
import { AuthService, ScreenService, AppInfoService } from './shared/services';
import { UnauthenticatedContentModule } from './unauthenticated-content';
import { AppRoutingModule } from './app-routing.module';
import { LocalidadeComponent } from './shared/components/localidade/localidade.component';
import { SelectBoxComponent } from './pages/select-box/select-box.component';
import { CrudNotaModule } from './layouts/crud-nota/crud-nota.module';
import { NotaComponent } from './pages/nota/nota.component';
import { ProdutoModule } from './pages/produto/produto.module';
import { ClienteModule } from './pages/cliente/cliente.module';


@NgModule({
  declarations: [
    AppComponent,
    LocalidadeComponent,
    SelectBoxComponent,
    NotaComponent
  ],
  imports: [
    BrowserModule,
    DxHttpModule,
    DxSelectBoxModule,
    SideNavOuterToolbarModule,
    SideNavInnerToolbarModule,
    SingleCardModule,
    FooterModule,
    ResetPasswordFormModule,
    CreateAccountFormModule,
    ChangePasswordFormModule,
    LoginFormModule,
    UnauthenticatedContentModule,
    AppRoutingModule,
    CrudNotaModule,
    ProdutoModule,
    ClienteModule
  ],
  providers: [
    AuthService,
    ScreenService,
    AppInfoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
