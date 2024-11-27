import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastraProdutoComponent } from './components/cadastra-produto/cadastra-produto.component';
import { DxButtonModule, DxFormModule, DxNumberBoxModule, DxPopupModule, DxTextBoxModule, DxValidatorModule } from 'devextreme-angular';



@NgModule({
  declarations: [
    CadastraProdutoComponent
  ],
  imports: [
    CommonModule,
    DxFormModule,
    DxButtonModule,
    DxValidatorModule,
    DxTextBoxModule,
    DxPopupModule,
    DxNumberBoxModule
  ],
  exports:[
    CadastraProdutoComponent
  ]
})
export class CrudProdutoModule { }
