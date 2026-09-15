import { faker } from "@faker-js/faker";

Cypress.Commands.add("acessarCadastroDireto", () => {
  cy.visit("/register");
});

Cypress.Commands.add("preencherNome", (firstName, lastName) => {
  cy.get("#user").type(`${firstName} ${lastName}`);
});

Cypress.Commands.add("preencherEmail", (firstName, lastName) => {
  cy.get("#email").type(
    faker.internet.email({
      firstName: String(firstName).toLowerCase(),
      lastName: String(lastName).toLowerCase(),
      provider: "gmail.com",
    })
  );
});

Cypress.Commands.add("preencherEmailCustomizado", (email) => {
  cy.get("#email").type(email);
});

Cypress.Commands.add("preencherSenha", (length = 8) => {
  cy.get("#password").type(faker.internet.password({ length }));
});

Cypress.Commands.add("registrar", () => {
  cy.get("#btnRegister").click();
});

Cypress.Commands.add("validarCadastroSucesso", (firstName, lastName) => {
  cy.get("#swal2-title").should("have.text", "Cadastro realizado!");
  cy.get("#swal2-html-container").should(
    "have.text",
    "Bem-vindo " + `${firstName} ${lastName}`
  );
});

Cypress.Commands.add("validarErroCadastro", (mensagem) => {
  cy.get("#errorMessageFirstName").should("have.text", mensagem);
});
