/// <reference types="cypress" />

describe("Login", () => {
  it("Login com sucesso", () => {
    cy.acessarLogin();
    cy.preencheEmail("meu-email@teste.com");
    cy.preencheSenha("121212");
    cy.fazerLogin();
    cy.validarLoginSucesso();
  });

  it("Login com e-mail inválido", () => {
    cy.acessarLogin();
    cy.preencheEmail("23762732736");
    cy.preencheSenha("121212");
    cy.fazerLogin();
    cy.validarErroLogin("E-mail inválido.");
  });

  it("Login com e-mail vazio", () => {
    cy.acessarLogin();
    cy.preencheSenha("121212");
    cy.fazerLogin();
    cy.validarErroLogin("E-mail inválido.");
  });

  it("Login com senha vazia", () => {
    cy.acessarLogin();
    cy.preencheEmail("eduardo.finotti@qazando.com");
    cy.fazerLogin();
    cy.validarErroLogin("Senha inválida.");
  });
});
