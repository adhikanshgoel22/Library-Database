// import Librarian from "../models/librarian";
import { authenticateUser,
    
    getAllUsers,
    

    
} from "../controllers/auth.js";
import { deleteBook, getAllBooks } from "../controllers/book.js";
import { addNewBook } from "../controllers/book.js";

import express from "express";

const router=express.Router();

router.post('/login',authenticateUser);

router.get('/get',getAllUsers);

router.get('/allbooks',getAllBooks);

router.post('/add',addNewBook);

router.delete('/books/:isbn', deleteBook);

export default router;