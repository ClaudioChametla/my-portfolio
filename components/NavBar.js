import { useColorMode, Switch,Flex, Button,Box, VStack } from '@chakra-ui/react'
import NextLink from 'next/link'


const navbar = () => {
  return (
    <Flex
      position="fixed"
      top="1rem"
      right="1rem"
      align="center"
      zIndex="999"
    >
      <Box h="100px"/>
        
        <Flex>
        <NextLink href="/" >
            <Button
              as="a"
              variant="ghost"
              aria-label="Home"
              my={5}
              w="100%"
              scroll="true"
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
            >
              Acerca de mi
              </Button>

          </NextLink>


          

          



        </Flex>
        
    </Flex>
  )
}
export default navbar
