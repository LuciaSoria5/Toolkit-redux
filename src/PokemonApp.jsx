import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { getPokemons } from "./store/slices/pokemon/thunks";

export const PokemonApp = () => {

  const dispatch = useDispatch();

  // para que el dispatch se ejecute una sola vez
  useEffect(() => {
    dispatch( getPokemons() );
  }, []);
  
  return (
    <>
        <h1>PokemonApp</h1>
        <hr/>
        <ul>
            <li>Hola</li>
            <li>Hola</li>
            <li>Hola</li>
        </ul>
    </>
  )
}
