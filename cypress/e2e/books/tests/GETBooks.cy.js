/// <reference types="cypress" />

import * as GETBooks from '../requests/GETBooks.requests'

describe ('GETBooks', () => {
    it('Listar todos os livros', () => {
        GETBooks.allBooks().then((Response) => {
            expect(Response.status).to.eq(200);
            expect(Response.body).to.be.not.null
            // cy.log(Response.status)
            // cy.log(Response.statusText)
            // cy.log(Response.body)
        })
    });
})