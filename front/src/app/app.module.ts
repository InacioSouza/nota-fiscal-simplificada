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
import { ProdutoModule } from './pages/produto/produto.module';
import { ClienteModule } from './pages/cliente/cliente.module';
import { NotaModule } from './pages/nota/nota.module';
import { ClienteService } from './shared/services/cliente.service';
import { ProdutoService } from './shared/services/produto.service';
import { NotaService } from './shared/services/nota.service';


@NgModule({
  declarations: [
    AppComponent,
    LocalidadeComponent,
    SelectBoxComponent
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
    ProdutoModule,
    ClienteModule,
    NotaModule
  ],
  providers: [
    AuthService,
    ScreenService,
    AppInfoService,
    ClienteService,
    ProdutoService,
    NotaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
