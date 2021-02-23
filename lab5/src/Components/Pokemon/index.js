const Pokemon = ({ pokemon }) => {
      return(
        
            <div>
              <h2>{pokemon.name}</h2>
              <p>{pokemon.id}</p>
              <img src={pokemon.sprites.front_default} />
              </div>
            
      )
}


export default Pokemon;
