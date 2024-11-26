import { Component, ViewChild } from '@angular/core';
import { Cliente } from '../../interfaces/Cliente';
import { ClienteService } from '../../services/cliente.service';
import { DxFormComponent } from 'devextreme-angular';

@Component({
  selector: 'app-cadastra-cliente',
  templateUrl: './cadastra-cliente.component.html',
  styleUrls: ['./cadastra-cliente.component.scss']
})
export class CadastraClienteComponent {

  verPopupOK: boolean = false;
  verPopupFalha: boolean = false;

  cliente!: Cliente;

  @ViewChild(DxFormComponent, { static: false }) form!: DxFormComponent;

  buttonOptions = {
    text: "Cadastrar",
    type: "success",
    onClick: () => this.cadastraCliente()
  };

  constructor(private clienteService: ClienteService) {

  }

  cadastraCliente(): void {

    const reultadoValidacao = this.form.instance.validate();

    if (reultadoValidacao.isValid) {

      this.clienteService.cadastra(this.cliente).subscribe({
        next: () => {
          this.verPopupOK = true;
          this.form.instance.updateData('nome', '');
          this.form.instance.getEditor('nome')?.reset();
        },
        error: (err) => {
          this.verPopupFalha = true;
        }
      })
    }
  }

}
