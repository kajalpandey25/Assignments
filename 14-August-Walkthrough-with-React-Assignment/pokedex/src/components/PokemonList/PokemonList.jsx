// css imports
import { useEffect, useState } from 'react';


import axios from 'axios';
import './PokemonList.css';
import Pokemon from '../Pokemon/Pokemon';

function PokemonList(){
    const DEFAULT_URL = "https://pokeapi.co/api/v2/pokemon";
    const [pokemonList, setPokemonList] = useState([]);
    const [pokedexUrl, setPokedexUrl] = useState(DEFAULT_URL);
    const [netUrl, setNextUrl]= useState(DEFAULT_URL);
    const [prevUrl, setPrevUrl] = useState(DEFAULT_URL);


  async  function downloadPokemons(){
    const response = await axios.get(pokedexUrl ? pokedexUrl : DEFAULT_URL);

    const pokemonResults = response.data.results; // array of pokemons

    setNextUrl(response.data.next);
    setPrevUrl(response.data.previous);
    
    const pokemonPromise = pokemonResults.map((pokemon) => axios.get(pokemon.url))

   const pokemonListData = await axios.all(pokemonPromise);
   const pokemonFinalList = pokemonListData.map(pokemonData => {
    const pokemon = pokemonData.data;
    return{
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.other.dream_world.front_default,
        type: pokemon.type
    }
   });
     
   setPokemonList(pokemonFinalList);
   
  }
    useEffect(() => {
        downloadPokemons();
        
    }, [pokedexUrl]);

    return(
        <div className='pokemon-list-wrapper'>
            <div>
           <h1>Pokemon List</h1> 
            </div>
            <div className='page-controls'>
                <button onClick={()=> setPokedexUrl(prevUrl)}>Prev</button>
                <button onClick={()=> setPokedexUrl(netUrl)}>Next</button>

            </div>
            <div className='pokemon-list'>
            {pokemonList.map(pokemon => <Pokemon name={pokemon.name} key={pokemon.id} url={pokemon.image} />)} 
            </div>
        </div>
    )
}

export default PokemonList;