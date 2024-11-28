import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { DxButtonModule, DxDataGridModule, DxFormModule, DxPopupModule, DxTextBoxModule, DxValidatorModule } from 'devextreme-angular';
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
    DxTextBoxModule
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
    DxTextBoxModule
  ]
})
export class DependenciasModule { }
