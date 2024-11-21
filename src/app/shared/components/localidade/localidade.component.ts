import { Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { EstadoService } from './services/estado-service.service';
import { MunicipioService } from './services/municipio.service';

@Component({
  selector: 'app-localidade',
  templateUrl: './localidade.component.html',
  styleUrls: ['./localidade.component.scss']
})

export class LocalidadeComponent implements OnInit, OnChanges {

  @Input() ufSelecionada!: string;
  @Input() municipioSelecionado!: string;

  ufs: string[] = [];
  municipios: string[] = [];

  @Output() devolveUF = new EventEmitter<string>();
  @Output() devolveMunicipio = new EventEmitter<string>();

  constructor(private estadoService: EstadoService, private municipioService: MunicipioService) {

  }
  ngOnInit(): void {

    this.estadoService.listaUF().subscribe((ufs: string[]) => {
      this.ufs = ufs;
    });

    this.carregaMunicipios();
    this.emitUF();
    this.emitMunicipio();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['ufSelecionada']) {
      this.carregaMunicipios();
    }

  }

  carregaMunicipios(): void {
    this.municipioService.carregaMunicipios(this.ufSelecionada)
      .subscribe(
        municipios => {
          this.municipios = municipios.map(municipio => municipio.nome);
        }
      )
  }

  emitUF(): void {
    this.devolveUF.emit(this.ufSelecionada);
  }

  emitMunicipio(): void {
    this.devolveMunicipio.emit(this.municipioSelecionado);
  }

}
