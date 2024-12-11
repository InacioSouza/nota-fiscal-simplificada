import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DependenciasModule } from 'src/app/layouts/dependencias/dependencias.module';
import { ListaNotaComponent } from './components/lista-nota/lista-nota.component';

@NgModule({
  declarations: [ListaNotaComponent],
  imports: [
    CommonModule,
    DependenciasModule
  ]
})
export class NotaModule { }
