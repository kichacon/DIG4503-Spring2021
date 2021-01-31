import axios from 'axios';
import chalk from 'chalk';

class Fetch {
    pokemon = "";
    color = "";

    constructor(pokemon, color) {
        this.pokemon = pokemon;
        this.color = color;

    }

    fetch() {
    
       // Fetch this URL
axios('https://pokeapi.co/api/v2/pokemon/ditto')
    // And then...
    .then(function (response) {
        // Use the 'data'
        const pokemon = response.data;

        // In this example, the above URL will return an object
        //  with data on the Pokemon requested
        console.log(chalk.hex("This is a " + pokemon.name + " and its ID is " + pokemon.id));
    })
    .catch(function (error) {
        // handle error
        console.log(chalk.red("Error: " + error));
    });

}
}


const c = new Fetch();