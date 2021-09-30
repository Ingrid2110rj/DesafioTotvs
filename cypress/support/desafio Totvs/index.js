//ações da página
const el = require('./elementos').ELEMENTOS
class Logon {

GravarNomeePreco(){
    cy.visit(el.url);
    cy.get(el.PESQUISAR).type("TOTVS Backoffice (Linha Protheus) - Gerador de Relatórios {enter}");
    cy.get(el.SALVARNOME).invoke('text').as('ProdutoEscolhido');
    cy.get(el.BOTAOCOMPRA).click();
    cy.get(el.SALVARPRECO).invoke('text').as('valorProduto');
}
acessarLogin(){
    cy.visit(el.url);
 }
 PreencherBusca(){
    cy.get(el.PESQUISAR).type("TOTVS Backoffice (Linha Protheus) - Gerador de Relatórios {enter}");
}

SelecionarProduto(){
    cy.get(el.BOTAOCOMPRA).click();

}
AcessarCarrinhodeCompra(){
    cy.get(el.BOTAOCARRINHO).click();
}
}


export default new Logon();