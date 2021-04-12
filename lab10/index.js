import Express from 'express';

const App = Express();
const port = 45030;

App.use( Express.json() );

App.put("/people/create", (req, res) => {
    Database.createOne();
    console.log(req.body);
});
App.get("/people/:person", (req, res) => {
    Database.readOne();
    people = req.params.people;
    person = req.params.person;
    
});

App.listen(port);