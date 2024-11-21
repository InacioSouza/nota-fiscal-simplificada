import { Component } from '@angular/core';

@Component({
  selector: 'app-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.scss']
})
export class SelectBoxComponent {

  uf!: string;
  municipio!: string;

  recebeUF(uf: string){
    this.uf = uf;
  }

  recebeMunicipio(municipio: string){
    this.municipio = municipio;
  }
}
