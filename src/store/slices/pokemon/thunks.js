import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice";

// es una funcion que regresa una funcoin asincrona
export const getPokemons = ( page = 0 ) => {
    // getState es una funcion con la info del state
    return async( dispatch, getState ) => {
        dispatch( startLoadingPokemons() );
        
        // NO AXIOS:
        // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${ page * 10 }`);
        // const data = await resp.json();

        // AXIOS:
        const { data } = await pokemonApi.get(`pokemon?limit=10&offset=${ page * 10 }`);

        dispatch( setPokemons( { pokemons: data.results, page: page + 1 } ) );
    }
};