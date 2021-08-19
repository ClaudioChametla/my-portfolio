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
                    src="https://scontent.fmex33-1.fna.fbcdn.net/v/t1.6435-9/83245201_1561723720649296_5245982117438947328_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=174925&_nc_eui2=AeEjX_e4IFK2KtFu_DCgCoDWsd5Lk4ZH8ICx3kuThkfwgDXIDJFvNvd9uealUdNRWXZAOhbUiKx7sdzwehukhx5-&_nc_ohc=YqH_rrENSSQAX8PCaQj&_nc_ht=scontent.fmex33-1.fna&oh=7f01c79bf39e65c9ff120bc45a6192d6&oe=61412457" 
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


