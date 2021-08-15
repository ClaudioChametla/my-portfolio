import { useColorMode, Switch,Flex, Button } from '@chakra-ui/react'

import NextLink from 'next/link'

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  return (
    <Flex
      position="fixed"
      top="1rem"
      right="1rem"
      align="center"
    >
      <Switch
          position="fixed"
          top="1rem"
          right="1rem"
          fontFamily="monospace"
          fontSize="20px"
          color="grey"
          isChecked={isDark}
          onChange={toggleColorMode}
        >Modo Oscuro </Switch>
      <Flex>
        <NextLink href="/" passHref>
          <Button
            as="a"
            variant="ghost"
            aria-label="Home"
            my={5}
            w="100%"
            
            
            
            >
              Bienvenido
            </Button>

        </NextLink>


        <NextLink href="/" passHref>
          <Button
            as="a"
            variant="ghost"
            aria-label="Home"
            my={5}
            w="100%"  
            
            
            >
              Proyectos
            </Button>

        </NextLink>


        <NextLink href="/" passHref>
          <Button
            as="a"
            variant="ghost"
            aria-label="Home"
            my={5}
            w="100%"  
            
            
            >
              Habilidades
            </Button>

        </NextLink>
        <NextLink href="/" passHref>
          <Button
            as="a"
            variant="ghost"
            aria-label="Home"
            my={5}
            w="100%"  
            
            
            >
              Acerca de mi
            </Button>

        </NextLink>


        <NextLink href="/" passHref>
          <Button
            as="a"
            variant="ghost"
            aria-label="Home"
            my={5}
            w="100%"  
            
            
            >
              Contacto
            </Button>

        </NextLink>

        



      </Flex>
        
    </Flex>
  )
}