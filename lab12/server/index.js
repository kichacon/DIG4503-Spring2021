import Express from 'express';
import CORS from 'cors';
import Database from "./Database.js";

const App = Express ();
const port = 45030;

App.use(CORS());
App.use (Express.json());

const db = new Database();
db.connect("lab11", "books");

App.put("/books/:ISBN", async (req, res) => {
  
    const result = await db.create({
        ISBN: "Some Value!",
        title: "Great Gatsby",
        author: "author",
        description: "description"

    });

    res.json(result);
    
});

App.get("/books/:ISBN", (req, res) => {
    const ISBN = req.params.ISBN;
    res.json({Book: "Not Found"})
   // if (req.params.ISBN =! null) {
   // res.json({ISBN: ISBN}); }
   // else {res.json("Not Found"); }
});

App.post("/books/search",  (req, res) => {
    const books = req.params.books;

    
    const result =  db.readMany(ISBN, title, author, description);
    res.json(result);


});

App.patch("/books/:ISBN", async (req, res) => {
    const result = await db.update({
        ISBN: "Some Value!",
        title: "Great Gatsby",
        author: "author",
        description: "description"

    },
       { ISBN: "Some",
        title: "some",
        author: "some",
        description: "some"
    });

    res.json(result);
    
 }) ;

App.delete("/books/:ISBN", async (req, res) => {
    const result = await db.delete({
        ISBN: "Some Value!",
        title: "Great Gatsby",
        author: "author",
        description: "description"

    });

    res.json(result);

});

App.listen(port);







