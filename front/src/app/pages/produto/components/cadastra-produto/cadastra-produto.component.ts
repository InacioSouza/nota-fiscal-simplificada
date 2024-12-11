import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { Produto } from '../../interfaces/Produto';
import { DxFormComponent } from 'devextreme-angular';
import notify from 'devextreme/ui/notify';
import { ProdutoService } from 'src/app/shared/services/produto.service';


@Component({
  selector: 'app-cadastra-produto',
  templateUrl: './cadastra-produto.component.html',
  styleUrls: ['./cadastra-produto.component.scss']
})
export class CadastraProdutoComponent {

  produtoForm = {
    nome: '',
    preco: ''
  }

  produto: Produto = {
    id: 0,
    nome: '',
    preco: 0
  }

  @Output() idProdutoCadastrado = new EventEmitter();

  @ViewChild(DxFormComponent, { static: false }) form!: DxFormComponent;

  buttonOptions = {
    text: "Cadastrar",
    type: "success",
    onClick: () => this.cadastraProduto()
  }

  constructor(private produtoService: ProdutoService) {

  }

  cadastraProduto(): void {

    this.produto.preco = parseFloat(this.produtoForm.preco);
    this.produto.nome = this.produtoForm.nome;


    const resultadoValidacao = this.form.instance.validate();

    if (resultadoValidacao.isValid) {
      this.produtoService.cadastra(this.produto).subscribe({
        next: (produto) => {
          notify('Produto cadastrado!', 'success', 3000);

          this.form.instance.getEditor('nome')?.reset();
          this.form.instance.getEditor('preco')?.reset();

          this.idProdutoCadastrado.emit(produto.id);
        },
        error: (err) => {
          notify('Falha ao cadastrar produto!', 'error', 3000)
        }
      });
    }


  }
}
