import { useEffect, useState } from 'react';
import Card from '../Card/Card'
import api from '../Services/api';


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
    <section>
        <div>
          {pokemons &&
            pokemons.map((pokemon) => {
              return <Card key={pokemon.name} name={pokemon.name} />;
            })}
        </div>
    </section>
  );
}