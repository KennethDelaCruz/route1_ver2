import {gql} from "@apollo/client";

const POKEMON_LIST = gql`
query samplePokeAPIquery {
  pokemon: pokemon_v2_pokemonspecies(where: {}, order_by: {id: asc}) {
    name
    flavorText: pokemon_v2_pokemonspeciesflavortexts(where: {pokemon_v2_language: {name: {_eq: "en"}}}, limit: 1) {
      flavor_text
    }
    details: pokemon_v2_pokemons_aggregate(order_by: {id:asc}) {
      nodes {
        height
        id
        name
        weight
        abilities: pokemon_v2_pokemonabilities_aggregate {
          nodes {
            ability: pokemon_v2_ability{
              name
            }
          }
        }
        types: pokemon_v2_pokemontypes {
          pokemon_v2_type {
            id
          }
        }
      }
    }
  }
}
`;

export default POKEMON_LIST;
