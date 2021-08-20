import { useColorMode, Switch,Flex, Button,Box, VStack,IconButton } from '@chakra-ui/react'
import NextLink from 'next/link'
import {useState} from 'react'


const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  return (
    <Flex
      position="fixed"
      top="1rem"
      right="1rem"
      align="center"
      zIndex="999"
    >
      <Switch
      position="fixed"
      top="1rem"
      right="1rem"
      color="green"
      isChecked={isDark}
      onChange={toggleColorMode}
    />
      <Box h="150px"/>
        
        <Flex
          bgGradient="linear(to-r, pink.700, blue.500)"
          borderRadius="full"

        >
        <NextLink href="/" >
            <Button
              as="a"
              variant="ghost"
              aria-label="Home"
              my={5}
              w="100%"
              scroll="true"
              color="white"
              
              >
                Inicio
              </Button>

          </NextLink>
          <NextLink href="/PProyectos" >
            <Button
              as="a"
              variant="ghost"
              aria-label="Home"
              my={5}
              w="100%"
              scroll="true"
              color="white"
              
              >
                Proyectos
              </Button>

          </NextLink>
          <NextLink href="/PHabilidades" >
            <Button
              as="a"
              variant="ghost"
              aria-label="Home"
              my={5}
              w="100%"  
              scroll="true"
              color="white"
              >
                Habilidades
              </Button>

          </NextLink>
          <NextLink href="/PAcerca" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="Home"
              my={5}
              w="100%"
              scroll="true"
              color="white"    
            >
              Acerca de mi
              </Button>

          </NextLink>


          

          



        </Flex>
        
    </Flex>
  )
}
export default DarkModeSwitch
