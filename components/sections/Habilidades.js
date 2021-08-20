import { List, ListItem, ListIcon,MdCheckCircle,Link,Text, Image,VStack,Box, Center, Flex  } from "@chakra-ui/react"

const habilidades = () => {
  return(
    
    
        <Center w="80%" flexDir="column">
          <Text fontSize="6xl" fontFamily="cursive" >Habilidades</Text>
          <Text fontSize="20px" >Algunos de las habilidades que domino en el entorno de desarrollador web son las siguientes:  </Text>
          <br/>
          <VStack spacing={3}>

          <List spacing={1} alignContent="center">
              <Image
              borderRadius="full"  
              w="250px" 
              h="auto" 
              src="https://static.vecteezy.com/system/resources/previews/002/221/955/non_2x/coding-neon-programming-icon-vector.jpg" 
              alt="Imagen Habilidad coding" />
          
              <br/>
              <ListItem fontSize="2rem">
                     
                  Tecnologias:
                </ListItem>
                <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                  HTML 5
                </ListItem>
                <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                  CCS 3
                </ListItem>
                <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                  JAVASCRIPT
                </ListItem>
                
                
              </List>
            </VStack>
        </Center>
    
  )
}

export default habilidades