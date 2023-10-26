import { Grid } from '@nextui-org/react'
import { FC } from 'react'
import { FavoriteCardPokemon } from './'

interface Props {
  pokemonsIds: number[]
}

export const FavoritePokemonsList: FC<Props> = ({ pokemonsIds }) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {pokemonsIds.map((pokemonId) => (
        <Grid xs={6} sm={30} md={2} xl={1} key={pokemonId}>
          <FavoriteCardPokemon key={pokemonId} pokemonId={pokemonId} />
        </Grid>
      ))}
    </Grid.Container>
  )
}
