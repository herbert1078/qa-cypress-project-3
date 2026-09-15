/// <reference types="cypress" />

describe("Comandos básicos", () => {
  it("Acessar uma aplicação", () => {
    cy.visit("/login");
    cy.url().should("include", "/login");
  });

  it("Selecionar elementos", () => {
    cy.visit("/login");

    cy.get("#user").should("be.visible");
    cy.get("#mc_embed_signup").find(".form-control").should("exist");
    cy.get(".footer_one_widget").contains(" Send Mail").should("exist");
  });

  it("Preencher campos", () => {
    cy.visit("/login");

    cy.get("#user").type("eduardo@gmail.com").should("have.value", "eduardo@gmail.com");
    cy.get("#password").type("122355").should("have.value", "122355");
  });

  it("Clicar num elemento", () => {
    cy.visit("/login");

    cy.get("#user").type("eduardo@gmail.com");
    cy.get("#password").type("122355");
    cy.get("#btnLogin").click();
  });

  it("Select", () => {
    cy.visit("/checkout-one");

    cy.get("#country").select("Afghanistan").should("have.value", "Afghanistan");
  });

  it("Checkbox e Radio button", () => {
    cy.visit("/checkout-one");

    cy.get("#materialUnchecked").check().should("be.checked");
    cy.get("#materialUnchecked").uncheck().should("not.be.checked");
    cy.get("#css").check().should("be.checked");
  });

  it("Validar texto e visibilidade", () => {
    cy.visit("/login");

    cy.validarTextoVisivel("#createAccount", "Ainda não tem conta?");
  });
});
