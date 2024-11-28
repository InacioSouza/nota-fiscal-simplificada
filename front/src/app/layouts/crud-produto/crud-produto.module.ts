import { NgModule } from '@angular/core';
import { CadastraProdutoComponent } from './components/cadastra-produto/cadastra-produto.component';
import { ListaProdutoComponent } from './components/lista-produto/lista-produto.component';
import { DependenciasModule } from '../dependencias/dependencias.module';

@NgModule({
  declarations: [
    CadastraProdutoComponent,
    ListaProdutoComponent
  ],
  imports: [
    DependenciasModule
  ],
  exports:[
    CadastraProdutoComponent
  ]
})
export class CrudProdutoModule { }
