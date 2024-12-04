import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DependenciasModule } from 'src/app/layouts/dependencias/dependencias.module';
import { CadastraProdutoComponent } from './components/cadastra-produto/cadastra-produto.component';
import { ListaProdutoComponent } from './components/lista-produto/lista-produto.component';



@NgModule({
  declarations: [CadastraProdutoComponent,
    ListaProdutoComponent],
  imports: [
    CommonModule,
    DependenciasModule,
]
})
export class ProdutoModule { }
