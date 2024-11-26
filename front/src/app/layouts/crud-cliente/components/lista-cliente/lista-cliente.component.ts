import { Component, Input } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { OnInit } from '@angular/core';
import { Cliente } from '../../interfaces/Cliente';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.scss']
})
export class ListaClienteComponent implements OnInit {

  @Input() rowFoco: number = 0;

  clientes!: Cliente[];

  textosAcoes = {
    confirmDeleteMessage: 'Deseja excluir permanentemente este cliente?',
  }

  get existemDados(): boolean {
    return this.clientes && this.clientes.length > 0;
  }

  constructor(private clienteService: ClienteService, private router: Router) {

  }

  ngOnInit(): void {
    this.clienteService.lista().subscribe(result => this.clientes = result);
  }

  editaCliente(rowData: any) {
    this.clienteService.modifica(rowData.key, rowData.newData).subscribe();
  }

  deletaCliente(rowData: any): void {
    this.clienteService.deleta(rowData.data.id).subscribe()
  }

  cadastraCliente(e: any): void {
    e.cancel = true;
    this.router.navigate(['cliente/cadastra-cliente']);
  }


}
