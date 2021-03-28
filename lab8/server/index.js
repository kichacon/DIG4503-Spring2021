import Express from 'express';
import CORS from 'cors';

const App = Express ();
const port = 45030;

App.use(CORS());

let names = [
    'Cortney',
    'Dewayne',
    'Trenton',
    'Pamala',
    'Ettie',
    'Errol',
    'Lorrie',
    'Hang',
    'Lauryn',
    'Caterina',
    'Isa',
    'Marcela'

];

App.put("/people/:person", (req, res) => {
    const person = req.params.person;
    names.push(person);
    res.json({name: person});
});

App.get("/people/:person", (req, res) => {
    const person = req.params.person;
    names.push(person);
    res.json({name: person});
});

App.get("/search/:name", (req, res) => {
    const name = req.params.name;
    const results = names.filter(value => value.includes(name));
    res.json({name: results});
});

App.listen(port, () => {
    console.log("Hello!");
});