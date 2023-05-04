/// <reference types="cypress" />

const jsonAddBoock = require('../json/Add-book.json')

function addBooks() {
    return cy.request({
        method: 'POST',
        url: '/v1/Books',
        failOnStatusCode: false,
        body: jsonAddBoock
    })

};

export {addBooks};