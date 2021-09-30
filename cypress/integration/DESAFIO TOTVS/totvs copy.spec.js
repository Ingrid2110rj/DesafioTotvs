///<reference types="cypress"/>

import Logon from '../support/desafio Totvs/index'
const el = require('../support/desafio Totvs/elementos').ELEMENTOS

describe("Validação de um produto", () => {
 
    beforeEach(() => {
       Logon.GravarNomeePreco();
        
    })
    it( "Acessar o site e pesquisar por produto", function () {
        Logon.acessarLogin();
        Logon.PreencherBusca();
        Logon.SelecionarProduto();
        cy.get(el.NOMEPRODUTOSITE).should('contain', this.ProdutoEscolhido);
        Logon.AcessarCarrinhodeCompra();
        cy.get(el.PRECO).should('contain', this.valorProduto)
        cy.get(el.NOMENOCARRINHO).should('contain', this.ProdutoEscolhido)
        cy.screenshot()
        
    })
})