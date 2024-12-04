import { Component, Input } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { OnInit } from '@angular/core';
import { Cliente } from '../../interfaces/Cliente';
import { Router } from '@angular/router';
import { AppInfoService } from 'src/app/shared/services';


@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.scss']
})
export class ListaClienteComponent implements OnInit {

  @Input() rowFoco: number = 0;

  clientes!: Cliente[];

  rowFocoKey!: number;

  popupCadastroCliente: boolean = false;

  textosAcoes = {
    confirmDeleteMessage: 'Deseja excluir permanentemente este cliente?',
  }

  get existemDados(): boolean {
    return this.clientes && this.clientes.length > 0;
  }

  toolbarModificada: boolean = false;

  constructor(private clienteService: ClienteService, private router: Router, private appInfo: AppInfoService) {

  }

  ngOnInit(): void {
    this.appInfo.title = "Clientes";
    this.carregaDataGrid();
  }

  carregaDataGrid(): void {
    this.clienteService.lista().subscribe(
      result => this.clientes = result);
  }

  editaCliente(rowData: any) {
    this.clienteService.modifica(rowData.key, rowData.newData).subscribe();
  }

  deletaCliente(rowData: any): void {
    this.clienteService.deleta(rowData.data.id).subscribe()
  }

  exibirPopupCadastro(): void {
    this.popupCadastroCliente = true;
  }

  cadastraCliente(e: any): void {
    e.cancel = true;
    this.router.navigate(['cliente/cadastra-cliente']);
  }

  fechaPopup(): void {
    this.popupCadastroCliente = false;
    this.carregaDataGrid();
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
          this.exibirPopupCadastro();
        },
      },
      location: 'after',
    });

    this.toolbarModificada = true;
  }

  focoClienteCadastrado(id: any): void {
    this.popupCadastroCliente = false;
    this.rowFocoKey = id;
  }

}
