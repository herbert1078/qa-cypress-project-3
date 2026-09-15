Cypress.Commands.add("acessarAplicacao", () => {
  cy.visit("/");
});

Cypress.Commands.add("acessarCadastro", () => {
  cy.get(".right_list_fix").contains("Cadastro").click();
});

Cypress.Commands.add("validarTextoVisivel", (seletor, texto) => {
  cy.get(seletor).should("contain", texto).should("be.visible");
});
