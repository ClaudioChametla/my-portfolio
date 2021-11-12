import { Flex, VStack } from "@chakra-ui/react"
import {Text, Image,Box, Center  } from "@chakra-ui/react"


const hero = () => {
    return(
        <VStack w="100%" bgColor="purple.600">
            <Center >
                    <Box w="100%" flexDir="column"> 
                    
                        <Text color="white" fontSize="6xl" fontFamily="cursive">Mi Portafolio</Text>
                        <br/>
                        <Image
                            borderRadius="full"
                            boxSize="150px"
                            src="images/CChametla.jpg"
                            alt="foto de perfil claudio"
                        />
                        <br/>
                        <Text color="white" fontSize="2rem">Mi nombre es Claudio Chametla y soy progrador web. </Text>
                    </Box>
            </Center>
        </VStack>
    )

}

export default hero