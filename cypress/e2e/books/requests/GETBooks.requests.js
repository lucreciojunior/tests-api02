/// <reference types="cypress" />

function allBooks() {
    
    return cy.request({
        method: 'GET',
        url: '/v1/Books',
        failOnStatusCode: false, // testa o retorno do status code e não quebra o teste. não flaha se volta diferente

    })
}

export {allBooks};