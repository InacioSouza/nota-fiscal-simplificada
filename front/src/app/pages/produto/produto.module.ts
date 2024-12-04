import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DependenciasModule } from 'src/app/layouts/dependencias/dependencias.module';
import { CadastraProdutoComponent } from './components/cadastra-produto/cadastra-produto.component';
import { ListaProdutoComponent } from './components/lista-produto/lista-produto.component';
import { CrudClienteModule } from "../../layouts/crud-cliente/crud-cliente.module";



@NgModule({
  declarations: [CadastraProdutoComponent,
    ListaProdutoComponent],
  imports: [
    CommonModule,
    DependenciasModule,
    CrudClienteModule
]
})
export class ProdutoModule { }
