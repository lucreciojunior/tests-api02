/// <reference types="cypress" />

function DeleteBook(idBook) {
    return cy.request({
        method: 'DELETE',
        url: `/v1/Books/${idBook}`,
        failOnStatusCode: false,
    })
}

export {DeleteBook};