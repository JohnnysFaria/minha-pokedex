import { useEffect, useState } from 'react';
import api from '../Services/api';
import { CardStyle, Image } from './Style';

export default function Card({ name }) {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const getPokemon = async () => {
      try {
        const data = await api.getPokemonDetails(name);
        setPokemon(data);
      } catch (e) {
        console.log(e);
      }
    };
    getPokemon();
  }, [name]);

  return (
    <>
      {pokemon && (
          <CardStyle>
            <p>{pokemon.name}</p>
            <p>{pokemon.id}</p>
            
            <Image
              src={pokemon.sprites.other['official-artwork'].front_default}
              alt={pokemon.name}
            />
          </CardStyle>
      )}
    </>
  );
}