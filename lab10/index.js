import Express from 'express';

const App = Express();
const port = 45030;

App.use( Express.json() );

App.put("/people/create", (req, res) => {
    // As this is PUT, the req.body can be used.
    console.log(req.body);
});
App.get("/people/:person", (req, res) => {
    console.log(req.body)
});

App.listen(port);