import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DependenciasModule } from 'src/app/layouts/dependencias/dependencias.module';
import { ListaNotaComponent } from './components/lista-nota/lista-nota.component';
import { CadastraNotaComponent } from './components/cadastra-nota/cadastra-nota.component';



@NgModule({
  declarations: [ListaNotaComponent, CadastraNotaComponent],
  imports: [
    CommonModule,
    DependenciasModule
  ]
})
export class NotaModule { }
