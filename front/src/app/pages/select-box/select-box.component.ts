import { Component } from '@angular/core';

@Component({
  selector: 'app-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.scss']
})
export class SelectBoxComponent {

  uf: string = "MG - Minas Gerais";
  municipio: string = "Araguari";

  recebeUF(uf: string){
    this.uf = uf;
  }

  recebeMunicipio(municipio: string){
    this.municipio = municipio;
  }
}
