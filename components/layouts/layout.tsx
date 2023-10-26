import Head from 'next/head'
import { FC, ReactNode } from 'react'
import { Navbar } from '../ui'

type ComponentProps = {
  children: ReactNode
  title?: string
}

const origin = typeof window === 'undefined' ? '' : window.location.origin

export const Layout: FC<ComponentProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title> {title || 'PokemonApp '} </title>
        <meta name="author" content="Fernando Herrera" />
        <meta name="description" content={`Información sobre el pokémon ${title}`} />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />

        <meta property="og:title" content={`Información sobre el pokemón ${title}`} />
        <meta property="og:description" content={`Información sobre el pokemón ${title}`} />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>

      <Navbar />

      <main style={{ padding: '0px 20px' }}>{children}</main>
    </>
  )
}
