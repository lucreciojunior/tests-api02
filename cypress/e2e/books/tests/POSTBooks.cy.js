/// <reference types="cypress" />

import * as POSTBooks from '../requests/POSTBooks.requests'

describe('POST Books', () => {
    it('Adicionar um novo livro', () => {
        POSTBooks.addBooks().then((Response) => {
            expect(Response.status).to.eq(200);
            expect(Response.body.title).to.eq('TESTE')
        })
        
    });
})