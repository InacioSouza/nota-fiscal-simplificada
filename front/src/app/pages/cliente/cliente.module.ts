import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DependenciasModule } from 'src/app/layouts/dependencias/dependencias.module';
import { CadastraClienteComponent } from './components/cadastra-cliente/cadastra-cliente.component';
import { ListaClienteComponent } from './components/lista-cliente/lista-cliente.component';



@NgModule({
  declarations: [CadastraClienteComponent,
    ListaClienteComponent],
  imports: [
    CommonModule,
    DependenciasModule
  ]
})
export class ClienteModule { }
