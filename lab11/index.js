import Express from 'express';
import Database from "./Database.js";

const App = Express ();
const port = 45030;

App.use (Express.json());

const db = new Database();
db.connect("lab11", "books");

App.put("/books/:ISBN", (req, res) => {
    const ISBN = req.params.ISBN;
    const title = req.body.title;
    const author = req.body.author;
    const description = req.body.description;

    res.json({
        ISBN: ISBN,
        title: title,
        author: author,
        description: description
    });
});

App.get("/books/:ISBN", (req, res) => {
    const ISBN = req.params.ISBN;

    if (ISBN == NULL) {
    res.json({book: "not found"});
    } else {
        return{ISBN: ISBN};
    }
});

App.post("/books/search", (req, res) => {
    const ISBN = req.params.ISBN;


})

App.patch("/books/:ISBN", async (req, res) => {
    const ISBN = req.params.ISBN;

    const title = req.body.title;
    const author = req.body.author;
    const description = req.body.description;

    const result = await db.updateOne(ISBN, title, author, description);

    res.json(result);
    
}) ;

App.delete("/books/:ISBN", (req, res) => {
    const ISBN = req.params.ISBN;

    const result = db.deleteOne(ISBN);

    res.json(result);
});

App.listen(port);