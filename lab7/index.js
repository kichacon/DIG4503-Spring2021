import Express from 'express';

const App = Express();
const port = 45030;

const names = [
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

App.get("people/:person", (req, res) => {
    let result = {name : "Not Found!"};
    
    names.forEach((value) => {
        if(req.params.person == value) {
            result = value;
        }
    });


    res.json("name:", {result});
    });

App.get("search/:name", (req, res) => {
    let result = {search: ["Not Found!"]};

    names.forEach((value) => {
        if(value.includes(req.params.name)) {
            names.push(value);
        }
    });

    res.json("search:", [names]);
});


App.listen(port, () => {
    console.log("Server Running");
});