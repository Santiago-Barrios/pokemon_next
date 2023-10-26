import { Card, Image } from '@nextui-org/react'
import { useRouter } from 'next/router'
import { FC } from 'react'

interface Props {
  pokemonId: number
}

export const FavoriteCardPokemon: FC<Props> = ({ pokemonId }) => {
  const router = useRouter()
  const onClick = () => {
    router.push(`/pokemon/${pokemonId}`)
  }

  return (
    <Card hoverable clickable css={{ padding: 10 }} onClick={() => onClick()}>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
        width={'100%'}
        height={140}
      />
    </Card>
  )
}
