import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastraNotaComponent } from './components/cadastra-nota/cadastra-nota.component';
import { DependenciasModule } from '../dependencias/dependencias.module';
import { DxFormModule } from 'devextreme-angular';



@NgModule({
  declarations: [
    CadastraNotaComponent
  ],
  imports: [
    DependenciasModule,
  ]
})
export class CrudNotaModule { }
