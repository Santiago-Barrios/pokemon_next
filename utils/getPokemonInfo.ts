import { pokeApi } from '../api'
import { Pokemon } from '../interfaces'

export const getPokemonInfo = async (nameOrId: string) => {
  try {
    const { data } = await pokeApi.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${nameOrId}`)
    return {
      id: data.id,
      name: data.name,
      sprites: data.sprites,
    }
  } catch (error) {
    return null
  }
}
