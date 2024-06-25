import Book from "../models/books.js";

export async function addNewBook(req, res) {
    try {
        const { title, author, publisher, genre, isbn } = req.body;

        console.log(req.body);
        const newBook = await Book.create({
            title,
            author,
            publisher,
            genre,
            isbn,
        });
        res.status(201).json("success");
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            res.status(400).json({ error: "ISBN must be unique" });
        } else {
            console.error("Error adding new Entry:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    }
}
export async function getAllBooks(req, res) {
    try {
        const books = await Book.findAll();
        res.json(books);
    } catch (error) {
        console.error("Error fetching books:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

export async function deleteBook(req, res) {
    try {
        const { isbn } = req.params;
        await Book.destroy({ where: { isbn } });
        res.status(200).send({ message: 'Book deleted successfully' });
    } catch (error) {
        console.error("Error deleting book:", error);
        res.status(500).send({ error: 'Internal server error' });
    }
}
