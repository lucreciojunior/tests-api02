import * as DELETEBook from '../requests/DELETEBooks.requests';
import * as GETBooks from '../requests/GETBooks.requests';
import * as POSTBooks from '../requests/POSTBooks.requests';

describe('DELETE Book', () => {
    it('Deletar um livro', () => {
        GETBooks.allBooks().then((resAllBooks) => {
           cy.log(resAllBooks.body[0].id) // não precisa usar 
           DELETEBook.DeleteBook(resAllBooks.body[0].id).should((resdeleteBook) =>{
            expect(resdeleteBook.status).to.eq(200)
           })
        })
    });
    
    it('Criar e excluir um livro', () => {
        POSTBooks.addBooks().then((resAddBook) => {
            DELETEBook.DeleteBook(resAddBook.body.id).should((resdeleteBook) => {
                expect(resdeleteBook.status).to.eq(200)
            })
        })
    });
})

// DELETEBook.DeleteBook()