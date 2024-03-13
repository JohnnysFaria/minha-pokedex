import { useEffect, useState } from 'react';
import Card from '../Card/Card'
import api from '../Services/api';
import { Wrapper } from './Style';


export default function Home() {
  const [pokemons, setPokemons] = useState(null);
  const getPokemons = async () => {
    try {
      const data = await api.getPokemonList(0);
      setPokemons(data.results);
    } catch (erro) {
      console.log(erro);
    }
  };
  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <Wrapper>
          {pokemons &&
            pokemons.map((pokemon) => {
              return <Card key={pokemon.name} name={pokemon.name} />;
            })}
    </Wrapper>
  );
}