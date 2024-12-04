import { Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { EstadoService } from './services/estado-service.service';
import { MunicipioService } from './services/municipio.service';
import { UF } from './interfaces/UF';
import { AppInfoService } from '../../services';

@Component({
  selector: 'app-localidade',
  templateUrl: './localidade.component.html',
  styleUrls: ['./localidade.component.scss']
})

export class LocalidadeComponent implements OnInit {

  ufs: string[] = [];
  municipios: string[] = [];
  contMudancaUF: number = 0;

  @Input() ufSelecionada!: string;
  @Input() municipioSelecionado!: string;

  @Output() ufSelecionadaChange = new EventEmitter<string>();
  @Output() municipioSelecionadoChange = new EventEmitter<string>();

  constructor(private estadoService: EstadoService, private municipioService: MunicipioService, private appInfo: AppInfoService) {

  }

  ngOnInit(): void {

    this.appInfo.title = 'Localidade'

    this.estadoService.listaUF().subscribe((ufs: UF[]) => {
      this.ufs = ufs.map(uf => uf.sigla + ' - ' + uf.nome);
    });

    this.carregaMunicipios();
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   if (changes['ufSelecionada']) {
  //     this.carregaMunicipios();
  //   }
  //
  // }

  carregaMunicipios(): void {
    this.municipioService.carregaMunicipios(this.ufSelecionada.substring(0, 3)).subscribe(municipios => {
      this.municipios = municipios.map(municipio => municipio.nome);
      this.contMudancaUF++;
      if (this.contMudancaUF > 1) {
        this.municipioSelecionado = "";
      }
    }
    )
  }


  // emitUF(): void {
  //   this.contMudancaUF++;
  //
  //   this.devolveUF.emit(this.ufSelecionada);
  //
  //   if (this.contMudancaUF > 1) {
  //     this.limpaMunicipioSelecionado();
  //   }
  // }

  // emitMunicipio(): void {
  //   this.devolveMunicipio.emit(this.municipioSelecionado);
  // }

  // limpaMunicipioSelecionado(): void {
  //   this.municipioSelecionado = '';
  // }
}
