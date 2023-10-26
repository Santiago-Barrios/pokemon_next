import { Spacer, Text, useTheme, Link } from '@nextui-org/react'
import Image from 'next/image'
import NextLink from 'next/link'

export const Navbar = () => {
  const { theme } = useTheme()

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0px 20px',
        backgroundColor: theme?.colors.gray900.value,
      }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        alt="icono app"
        width={70}
        height={70}
      />

      <NextLink legacyBehavior href="/" passHref>
        <Link>
          <Text color="white" h2>
            P
          </Text>
          <Text color="white" h3>
            okémon
          </Text>
        </Link>
      </NextLink>

      <Spacer css={{ flex: 1 }} />

      <NextLink legacyBehavior href="/favorites" passHref>
        <Link>
          <Text color="white" h3>
            Favoritos
          </Text>
        </Link>
      </NextLink>
    </div>
  )
}
