/// <reference types="cypress" />

import { faker } from "@faker-js/faker";

describe("Cadastro de usuário", () => {
  beforeEach(() => {
    cy.acessarCadastroDireto();
  });

  it("Cadastro de usuário com sucesso (massa dinâmica)", () => {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();

    cy.preencherNome(firstName, lastName);
    cy.preencherEmail(firstName, lastName);
    cy.preencherSenha(8);
    cy.registrar();
    cy.validarCadastroSucesso(firstName, lastName);
  });

  it("Cadastro de usuário acessando pela home", () => {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();

    cy.acessarAplicacao();
    cy.acessarCadastro();

    cy.preencherNome(firstName, lastName);
    cy.preencherEmail(firstName, lastName);
    cy.preencherSenha(8);
    cy.registrar();
    cy.validarCadastroSucesso(firstName, lastName);
  });

  it("Cadastro de usuário com nome vazio", () => {
    cy.preencherEmailCustomizado("automacao@minhaempresa.com");
    cy.preencherSenha(8);
    cy.registrar();
    cy.validarErroCadastro("O campo nome deve ser prenchido");
  });

  it("Cadastro de usuário com e-mail vazio", () => {
    cy.get("#user").type(faker.person.fullName());
    cy.preencherSenha(8);
    cy.registrar();
    cy.validarErroCadastro("O campo e-mail deve ser prenchido corretamente");
  });

  it("Cadastro de usuário com e-mail inválido", () => {
    cy.get("#user").type(faker.person.fullName());
    cy.preencherEmailCustomizado("automacao");
    cy.preencherSenha(8);
    cy.registrar();
    cy.validarErroCadastro("O campo e-mail deve ser prenchido corretamente");
  });

  it("Cadastro de usuário com senha vazia", () => {
    cy.get("#user").type(faker.person.fullName());
    cy.preencherEmailCustomizado("automacao@minhaempresa.com");
    cy.registrar();
    cy.validarErroCadastro("O campo senha deve ter pelo menos 6 dígitos");
  });

  it("Cadastro de usuário com senha menor que 6 dígitos", () => {
    cy.get("#user").type(faker.person.fullName());
    cy.preencherEmailCustomizado("automacao@minhaempresa.com");
    cy.preencherSenha(4);
    cy.registrar();
    cy.validarErroCadastro("O campo senha deve ter pelo menos 6 dígitos");
  });
});
