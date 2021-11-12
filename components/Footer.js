import { Avatar, List, ListItem, ListIcon,MdCheckCircle,Link,Text, Image, Stack,HStack,StackDivider,VStack,Box, Center, Flex  } from "@chakra-ui/react"

const footer = () => {
    return(
        <Flex>
            <Center w="100%" flexDir="column">
                <HStack 
                
                    bgGradient="linear(to-r, blue.700, pink.500)"
                    h="auto"
                    w="100%"
                    spacing={10}
                    justify="center"
                >
                <Image  
                    borderRadius="full"
                    w="130px" 
                    h="auto" 
                    src="images/CChametla.jpg" 
                    alt="claudiofooterfoto" />

                    
                    <List spacing={2} color="white" fontSize="20px" >
                    
                    <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" /> 

                        Correo:
                    </ListItem>
                    
                    <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" /> 
                        clauchametla.777@gmail.com
                    </ListItem>
                    
                    <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" /> 
                        Telefono:
                    </ListItem>
            
                    <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" /> 
                        56 15 64 49 57
                    </ListItem>
                </List>

                <Avatar name="Claudio" src="https://bit.ly/broken-link" />
                <Text fontSize="2rem" fontFamily="monospace" color="white"> 
                    Claudio Chametla Torres 
                    
                    </Text>
                </HStack>
            </Center>

        </Flex>
    )


}

export default footer


