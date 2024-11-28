import { NgModule } from '@angular/core';
import { CadastraClienteComponent } from './components/cadastra-cliente/cadastra-cliente.component';
import { ListaClienteComponent } from './components/lista-cliente/lista-cliente.component';

import { DependenciasModule } from '../dependencias/dependencias.module';

@NgModule({
  declarations: [
    CadastraClienteComponent,
    ListaClienteComponent
  ],
  imports: [
    DependenciasModule
  ],
  exports: [
    CadastraClienteComponent,
    ListaClienteComponent
  ]
})

export class CrudClienteModule { }
