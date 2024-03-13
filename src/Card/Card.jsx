import { useEffect, useState } from 'react';
import api from '../Services/api';
import { CardStyle, Image, Title } from './Style';
import { getBackground, getTitle } from '../Utils/Colors';

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
          <CardStyle
            style={{ background: getBackground(pokemon.types[0].type.name) }}
          >
            <div>

            <Title
              style={{ background: getTitle(pokemon.types[0].type.name) }}
              >{pokemon.name}</Title>
            <p>{pokemon.id}</p>
            
              </div>
            <Image
              src={pokemon.sprites.other['official-artwork'].front_default}
              alt={pokemon.name}
            />
          </CardStyle>
      )}
    </>
  );
}