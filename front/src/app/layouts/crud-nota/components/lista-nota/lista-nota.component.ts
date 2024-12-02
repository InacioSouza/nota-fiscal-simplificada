import { Component, OnInit } from '@angular/core';
import { NotaService } from '../../services/nota.service';
import { Nota } from '../../interfaces/Nota';
import { Item } from '../../interfaces/Item';

@Component({
  selector: 'app-lista-nota',
  templateUrl: './lista-nota.component.html',
  styleUrls: ['./lista-nota.component.scss']
})
export class ListaNotaComponent implements OnInit {

  notas!: Nota[];

  get existemDados(): boolean {
    return this.notas && this.notas.length > 0;
  }

  constructor(private notaService: NotaService) {

  }

  ngOnInit(): void {
    this.notaService.lista().subscribe(
      result => this.notas = result
    );
  }

}
