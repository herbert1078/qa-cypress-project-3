# qa-cypress-project

Projeto de automação de testes E2E com **Cypress**, gerado pelo QA Portfolio Builder (Qazando).
Aplicação sob teste: [https://automationpratice.com.br](https://automationpratice.com.br)

## Tecnologias

- Cypress 14
- Mochawesome (relatórios)
- @faker-js/faker (massa de dados dinâmica)
- GitHub Actions (CI/CD)

## Pré-requisitos

- Node.js 20+
- npm

## Instalação

```bash
npm install
```

## Executar os testes

```bash
npm test
```

## Abrir o Cypress em modo interativo

```bash
npm run cy:open
```

## Estrutura

```text
cypress/
├── e2e/                    # cenários de teste
│   ├── login.cy.js
│   ├── cadastro-usuario.cy.js
│   └── comandos-basicos.cy.js
├── fixtures/               # massa de dados estática
└── support/                # custom commands por domínio
    ├── e2e.js
    ├── login_commands.js
    ├── cadastro_commands.js
    └── home_commands.js
```

## Cenários cobertos

**Login:** sucesso, e-mail inválido, e-mail vazio, senha vazia.

**Cadastro:** sucesso com massa dinâmica, cadastro pela home, nome vazio, e-mail vazio, e-mail inválido, senha vazia, senha menor que o mínimo.

**Interações básicas:** navegação, seleção de elementos, preenchimento, clique, select, checkbox, radio button e validação de texto/visibilidade.

## Relatórios

Após `npm test`, o relatório Mochawesome é gerado em `mochawesome-report/`.

## CI/CD

O workflow `.github/workflows/cypress.yml` executa os testes a cada push e pull request, publicando screenshots (em caso de falha) e o relatório Mochawesome como artefatos.

_Nível do projeto: beginner_
