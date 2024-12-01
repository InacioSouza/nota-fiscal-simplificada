import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { DxButtonModule, DxDataGridModule, DxDateBoxModule, DxFormModule, DxListModule, DxNumberBoxModule, DxPopupModule, DxSelectBoxComponent, DxSelectBoxModule, DxTextBoxModule, DxValidatorModule } from 'devextreme-angular';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    DxFormModule,
    DxButtonModule,
    DxDataGridModule,
    HttpClientModule,
    DxPopupModule,
    DxValidatorModule,
    DxTextBoxModule,
    DxSelectBoxModule,
    DxNumberBoxModule,
    DxListModule,
    DxDateBoxModule
  ],
  exports: [
    CommonModule,
    BrowserModule,
    DxFormModule,
    DxButtonModule,
    DxDataGridModule,
    HttpClientModule,
    DxPopupModule,
    DxValidatorModule,
    DxTextBoxModule,
    DxSelectBoxModule,
    DxNumberBoxModule,
    DxListModule,
    DxDateBoxModule
  ]
})
export class DependenciasModule { }
