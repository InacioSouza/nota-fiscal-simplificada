import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastraNotaComponent } from './components/cadastra-nota/cadastra-nota.component';
import { DependenciasModule } from '../dependencias/dependencias.module';
import { DxFormModule } from 'devextreme-angular';
import { ListaNotaComponent } from './components/lista-nota/lista-nota.component';



@NgModule({
  declarations: [
    CadastraNotaComponent,
    ListaNotaComponent
  ],
  imports: [
    DependenciasModule,
  ]
})
export class CrudNotaModule { }
