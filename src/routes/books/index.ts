import { Router } from 'express';

import { BookController } from '@/controllers/BookController';

const booksRouter = Router();

booksRouter.post('/books/create', BookController.CreateBook);
booksRouter.get('/books/list', BookController.ListBook);
booksRouter.put('/books/update/:id', BookController.UpdateBook);
booksRouter.delete('/books/delete/:code', BookController.DeleteBook);

export { booksRouter };
