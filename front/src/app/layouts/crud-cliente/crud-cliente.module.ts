import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastraClienteComponent } from './components/cadastra-cliente/cadastra-cliente.component';
import { BrowserModule } from '@angular/platform-browser';
import { ListaClienteComponent } from './components/lista-cliente/lista-cliente.component';

import { DxDataGridModule, DxFormModule, DxPopupModule, DxTextBoxModule, DxValidatorModule } from 'devextreme-angular';
import { DxButtonModule } from 'devextreme-angular';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    CadastraClienteComponent,
    ListaClienteComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    DxFormModule,
    DxButtonModule,
    DxDataGridModule,
    HttpClientModule,
    DxPopupModule,
    DxValidatorModule,
    DxTextBoxModule
  ],
  exports: [
    CadastraClienteComponent,
    ListaClienteComponent
  ]
})

export class CrudClienteModule { }
