import { Component } from '@angular/core';
import { Produto } from "./shared/model/produto";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  produto: Produto;
  produtos: Produto[] = [];
  mensagemErro = '';
  produtosPesquisa: Array<Produto> = [];

  constructor() {
    this.produto = new Produto();
  }

  private ehIDCadastrado(id: number): boolean {
    const idRetornados = this.produtos.filter(p => p.id === id);
    return idRetornados.length > 0;
  }

  inserirProduto(): void {
    if (!this.ehIDCadastrado(this.produto.id)) {
      this.produtos.push(this.produto);
      this.produto = new Produto();
      this.mensagemErro = '';
    }
    else {
      this.mensagemErro = `ID ${this.produto.id} já cadastrado`;
    }
  }

  excluirProduto(produto: Produto): void {
    const index = this.produtos.findIndex(p => p.id === produto.id);
    if (index !== -1) {
      this.produtos.splice(index, 1);
    }
  }

  pesquisarProduto(pedacoNome: string): void {
    if (pedacoNome.length == 0) {
      this.produtosPesquisa = [];
    }
    this.produtos.forEach(produto => {
      if (produto.nome.startsWith(pedacoNome)) {
        this.produtosPesquisa.push(produto);
      }
    });
  }

  atualizarProduto(): void {
    const index = this.produtos.findIndex(p => p.id === this.produto.id);
    if (index !== -1) {
      this.produtos[index] = this.produto;
      this.produto = new Produto();
      this.mensagemErro = '';
    } else {
      this.mensagemErro = `ID ${this.produto.id} não encontrado`;
    }
  }

  listarProdutos(): Produto[] {
    return this.produtos;
  }

  }