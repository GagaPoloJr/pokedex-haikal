import uuid from 'react-native-uuid';
import Pokemon from '@/models/Pokemon';

type capturePokemonProps = {
  pokemon: Pokemon;
  setRateChance: React.Dispatch<React.SetStateAction<boolean>>;
  rateChance: boolean;
  swal: any;
  createFavPokemon: (dataPokemon: Pokemon) => void;
};

export const capturePokemon = ({
  pokemon,
  setRateChance,
  rateChance,
  swal,
  createFavPokemon,
}: capturePokemonProps) => {
  setRateChance(Math.random() < 0.5);
  if (rateChance === true) {
    let nickname = '';
    swal(`A wild ${pokemon.name} appeared! What do you want to do?`, {
      buttons: {
        cancel: 'Run away!',
        catch: {
          text: 'Throw Pokéball!',
          value: 'catch',
        },
      },
    }).then((value: any) => {
      switch (value) {
        case 'catch':
          swal('Give ur pokemon nickname:', {
            content: 'input',
          }).then((value: any) => {
            if (value === null || value === '' || value === '') {
              nickname = pokemon.name;
            } else {
              nickname = value;
            }

            const dataPokemon = {
              unique: uuid.v4(),
              id: pokemon.id,
              name: pokemon.name,
              nickname: nickname,
            };
            createFavPokemon(dataPokemon);
            swal({
              title: 'Gotcha!',
              text: `${pokemon.name} was caught!`,
              icon: 'success',
            });
          });
          break;
        default:
          swal('Got away safely!');
      }
    });
  } else {
    swal({
      title: 'Oh NO!!',
      text: `${pokemon.name} ran away!`,
      icon: 'warning',
      button: 'Ok....',
    });
  }
};
