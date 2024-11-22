import {Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChange, SimpleChanges} from '@angular/core';
import {EstadoService} from './services/estado-service.service';
import {MunicipioService} from './services/municipio.service';

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

  constructor(private estadoService: EstadoService, private municipioService: MunicipioService) {

  }

  ngOnInit(): void {

    this.estadoService.listaUF().subscribe((ufs: string[]) => {
      this.ufs = ufs;
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
    this.municipioService.carregaMunicipios(this.ufSelecionada).subscribe(municipios => {
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
