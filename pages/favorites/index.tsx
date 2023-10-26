import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { Layout } from '../../components/layouts'
import { NoFavorites } from '../../components/ui'
import { localFavorites } from '../../utils'
import { FavoritePokemonsList } from '../../components/pokemon'

const Favorites: NextPage = () => {
  const [favoritePokemonsIds, setFavoritePokemonsIds] = useState<number[]>([])

  useEffect(() => {
    setFavoritePokemonsIds(localFavorites.pokemons())
  }, [])

  return (
    <Layout title="favorites">
      {favoritePokemonsIds.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemonsList pokemonsIds={favoritePokemonsIds} />
      )}
    </Layout>
  )
}

export default Favorites
