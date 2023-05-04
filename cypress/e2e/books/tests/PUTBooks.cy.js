/// <reference types="cypress" />

import * as PUTBooks from '../requests/PUTBooks.requests'
import * as GETBooks from '../requests/GETBooks.requests'
import * as POSTBooks from '../requests/POSTBooks.requests'

describe('PUT Books', () => {
    it('Alternar um livro', () => {
        GETBooks.allBooks().then((resAllBooks) => {
            PUTBooks.AlterBook(resAllBooks.body[0].id).should((reschangebook) => {
                expect(reschangebook.status).to.eq(200)
                expect(reschangebook.body).to.be.not.null
                expect(reschangebook.body.title).to.eq('Alterando livro')
            })
        })
    });

    it('Criar e alternar um livro', () => {
        POSTBooks.addBooks().then((resAllBooks) => {
            PUTBooks.AlterBook(resAllBooks.body.id).should((reschangebook) => {
                expect(reschangebook.status).to.eq(200)
                expect(reschangebook.body).to.be.not.null
                expect(reschangebook.body.title).to.eq('Alterando livro')
            })
        })
    });
})