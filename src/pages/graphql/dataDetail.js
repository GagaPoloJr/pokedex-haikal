import { gql } from "@apollo/client";

export const GET_POKEMON_DETAIL = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      status
      height
      weight
      base_experience
      held_items {
        item {
          name
        }
      }
      sprites {
        front_default
      }
      abilities {
        ability {
          name
        }
      }
      stats {
        base_stat
        effort
        stat {
          name
        }
      }
      moves {
        move {
          name
        }
      }
      types {
        type {
          name
        }
      }
     
    }
  }
`;
