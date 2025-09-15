// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('cria_user', (user) => {
    cy.api({
        method: 'POST',
        url: 'https://serverest.dev/usuarios',
        body: user
    })
})

Cypress.Commands.add('busca_user', (id) => {
    cy.api({
        method: 'GET',
        url: `https://serverest.dev/usuarios/${id}`
    })
})

Cypress.Commands.add('atlz_user', (user) => {
    cy.api({
        method: 'PUT',
        url: `https://serverest.dev/usuarios/${Cypress.env('id')}`,
        body: user
    }).then((response) => { return response })
})

Cypress.Commands.add('del_user', () => {
    cy.api({
        method: 'DELETE',
        url: `https://serverest.dev/usuarios/${Cypress.env('id')}`
    }).then((response) => { return response })
})

Cypress.Commands.add('login', (email, senha) => {
    cy.api({
        method: 'POST',
        url: 'https://serverest.dev/login',
        body: { email, password: senha }
    }).then((response) => { return response })
})

Cypress.Commands.add('cria_produto', (produto) => {
    cy.api({
        method: 'POST',
        url: `https://serverest.dev/produtos/`,
        body: prod,
        headers: { authorization: Cypress.env('token') }
    }).then((response) => { return response })
})

Cypress.Commands.add('busca_prod', () => {
    cy.api({
        method: 'GET',
        url: `https://serverest.dev/produtos/` + id
    }).then((response) => { return response })
})
Cypress.Commands.add('atualiza_produto', (atualiza_produto) => {
    cy.api({
        method: 'PUT',
        url: `https://serverest.dev/produtos/${Cypress.env('id')}`,
        body: atualiza_produto,
        headers: { authorization: Cypress.env('token') }

    }).then((response) => { return response })

})

