import { Component, OnInit, ViewChild } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';
import { Produto } from '../../interfaces/Produto';
import { DxFormComponent } from 'devextreme-angular';

@Component({
  selector: 'app-cadastra-produto',
  templateUrl: './cadastra-produto.component.html',
  styleUrls: ['./cadastra-produto.component.scss']
})
export class CadastraProdutoComponent {

  verPopupOK: boolean = false;
  verPopupFalha: boolean = false;

  produto!: Produto;

  @ViewChild(DxFormComponent, { static: false }) form!: DxFormComponent;

  buttonOptions = {
    text: "Cadastrar",
    type: "success",
    onclick: () => this.cadastraProduto()
  }

  constructor(private produtoService: ProdutoService) {

  }

  cadastraProduto(): void {

    const resultadoValidacao = this.form.instance.validate();

    if (resultadoValidacao.isValid) {
      this.produtoService.cadastra(this.produto).subscribe({
        next: () => {
          this.verPopupOK = true;
          this.form.instance.updateData('nome', '');
          this.form.instance.getEditor('nome')?.reset();
        },
        error: (err) => {
          this.verPopupFalha = true;
        }
      });
    }
  }


  customFormat = {
    type: 'custom',
    formatter: (value: number | null) => {
      return value != null
        ? value.toLocaleString('pt-BR', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        })
        : '';
    },
    parser: (text: string) => {
      return text
        ? parseFloat(text.replace(/\./g, '').replace(',', '.'))
        : null;
    }
  };

  handleInput(e: any): void {
    const inputValue = e.event.target.value.replace(/\D/g, ''); // Remove não numéricos
    const numericValue = parseFloat(inputValue) / 100; // Divide por 100 para ajustar casas decimais
    e.component.option('value', numericValue); // Atualiza o valor formatado
  }
}
