/// <reference types="cypress" />

const putaletrbook = require('../json/alter-book.json')

function AlterBook(idBook) {
    return cy.request({
        method: 'PUT',
        url: `/v1/Books/${idBook}`,
        failOnStatusCode: false,
        body: putaletrbook
    })

}

export {AlterBook}