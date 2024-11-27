import { Component, ViewChild } from '@angular/core';
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

  produtoForm = {
    nome: '',
    preco: ''
  }

  produto: Produto = {
    id: 0,
    nome: '',
    preco: 0
  }


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
        next: () => {
          this.verPopupOK = true;
          this.form.instance.getEditor('nome')?.reset();
          this.form.instance.getEditor('preco')?.reset();
        },
        error: (err) => {
          this.verPopupFalha = true;
        }
      });
    } 

    
  }
}
