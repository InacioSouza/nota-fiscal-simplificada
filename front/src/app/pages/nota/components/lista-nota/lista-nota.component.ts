import { Component, OnInit } from '@angular/core';
import { NotaService } from '../../services/nota.service';
import { Nota } from '../../interfaces/Nota';
import { AppInfoService } from 'src/app/shared/services';

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

  exibePopupNota: boolean = false;

  toolbarModificada: boolean = false;

  focoRowId!: number;

  constructor(private notaService: NotaService, private appInfo: AppInfoService) {

  }

  ngOnInit(): void {
    this.appInfo.title = "Notas";
    this.carregaDataGrid();
  }

  carregaDataGrid(): void {
    this.notaService.lista().subscribe(
      result => this.notas = result
    );
  }

  modificaToolbar(event: any): void {
    if (this.toolbarModificada) return;

    const itensToolbar = event.toolbarOptions.items;

    itensToolbar.push({
      widget: 'dxButton',
      options: {
        icon: 'add',
        hint: 'Adicionar nova linha',
        onClick: () => {
          this.exibePopupNota = true;
        },
      },
      location: 'after',
    });

    this.toolbarModificada = true;
  }

  focoNotaCadastrada(id: any) {
    this.fechaPopup();
    this.focoRowId = id;
  }

  fechaPopup(): void {
    this.exibePopupNota = false;
    this.carregaDataGrid();
  }
}
