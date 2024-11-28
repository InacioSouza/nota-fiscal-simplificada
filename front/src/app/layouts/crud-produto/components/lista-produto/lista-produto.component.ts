import { Component, OnInit } from '@angular/core';
import { Produto } from '../../interfaces/Produto';
import { ProdutoService } from '../../services/produto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.scss']
})
export class ListaProdutoComponent implements OnInit {


  produtos!: Produto[];

  rowFoco: number = 0;

  textoAcoes = {
    confirmDeleteMessage: "Deseja excluir permanentemente este produto?"
  }

  get existemDados(): boolean {
    return this.produtos && this.produtos.length > 0;
  }


  constructor(private produtoService: ProdutoService, private router: Router) {

  }

  ngOnInit(): void {
    this.produtoService.lista().subscribe(
      result => this.produtos = result
    )
  }


  editaProduto(rowData: any): void {
    this.produtoService.modifica(rowData.key, rowData.newData).subscribe();
  }

  deletaProduto(rowData: any): void {
    this.produtoService.deleta(rowData.data.id).subscribe();
  }

  cadastraProduto(rowData: any): void {
    rowData.cancel = true;
    this.router.navigate(['produto/cadastra-produto'])
  }
}
