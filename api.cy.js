describe('api do sevrest', () => {
    it.only('criar usuario', () => {
        cy.fixture('usuario').then(function (usuario) {
            const user = usuario.cria_usuario
            cy.cria_user(user).then((response) => {
                expect(response.status).to.eq(201)
                expect(response.body.message).to.eq('Cadastro realizado com sucesso')
                Cypress.env('id', response.body._id)
            })
        })
    })

    it("Listar usuarios", () => {
        cy.api({
            method: 'GET',
            url: 'https://serverest.dev/usuarios'
        }).then((response) => {
            expect(response.status).to.eq(200)
        })
    })


    it("Buscar usuário por ID", () => {
        const id = Cypress.env('id')
        cy.busca_user(id).then((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it("Alterar usuario ja cadastrado", () => {
        cy.fixture('usuario').then(function (usuario) {
            const user = usuario.atlz_user
            cy.atlz_user(user).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.message).to.eq('Registro alterado com sucesso')
            })
        })
    })
    it("Realiza login no sistema", () => {
        cy.fixture("usuario").then(function (usuario) {
            const email = usuario.cria_usuario.email
            const senha = usuario.cria_usuario.password
            cy.login(email, senha).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.message).to.eq('Login realizado com sucesso')
                Cypress.env('token', response.body.authorization)
            })
        })
    })
    it('cadastro de produto', () => {
        cy.fixture("produto").then(function (produto) {
            const prod = produto.cria_produto
            cy.cria_produto(prod).then((response) => {
                expect(response.status).to.eq(201)
                expect(response.body.message).to.eq('Cadastro realizado com sucesso')
                Cypress.env('id_produto', response.body._id)
            })
        })

    })
    it('listar produtos', () => {
        const id = ''
        cy.busca_prod(id)
        //cy.api ({
        //method:'GET',
        //url: `https://serverest.dev/produtos/` + id
    }).then((response) => {
        expect(response.status).to.eq(200)
    })
})

it('busca produto por id', () => {
    //como a url e exatamente a mesma do IT anteriuor, podemos copiar todo o codigo e aplicar aqui neste caso de teste
    //vamos interpolar com uma variavel o produto , usando a crase url: `https://serverest.dev/produtos`
    //vamos criar uma variavel para armezenar o id do produto
    const id = Cypress.env('id_produto')
    cy.busca_prod(id)
    //cy.api ({
    //method:'GET',
    //url: `https://serverest.dev/produtos/` + id
}).then((response) => {
    expect(response.status).to.eq(200)
})
it('atualiza produto', () => {
    cy.fixture("produto").then(function (produto) {
        const prod = produto.atualiza_produto

        //cy.api({
        //method: 'PUT',
        //  url: `https://serverest.dev/produtos/${Cypress.env('id') }`,
        // body: atualiza_produto,
        // headers: {autorization: Cypress.env('token')}

    }).then((response) => {
        expect(response.status).to.eq(200)
        expect(reponse.body.message).to.eq('Registro alterado com sucesso')

    })
})




//  it("excluir usuario cadastrado", () => {
//cy.del_user().then((response) => {
//     expect(response.status).to.eq(200)
//     expect(response.body.message).to.eq('Registro excluído com sucesso')
// })
//})




