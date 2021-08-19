import { Flex, VStack } from "@chakra-ui/react"
import {Text, Image,Box, Center  } from "@chakra-ui/react"


const hero = () => {
    return(
        <VStack w="100%" bgColor="purple.600">
            <Center >
                    <Box w="100%" flexDir="column"> 
                    
                        <Text fontSize="6xl" fontFamily="cursive">Mi Portafolio</Text>
                        <br/>
                        <Image
                            borderRadius="full"
                            boxSize="150px"
                            src="https://scontent.fmex33-1.fna.fbcdn.net/v/t1.6435-9/37693347_220925092084311_7773108262718668800_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_eui2=AeEkVv5yv-tc5O8nQlvvWgPtxk8IyK4KZ-zGTwjIrgpn7POJ9nok1TNC4spCPIyMAxrLDoS_XnDgT5sye5-KhEDY&_nc_ohc=4vXpe1pzIsUAX-ajf1F&_nc_ht=scontent.fmex33-1.fna&oh=ac80220724abc3e585c051b1a7fa2804&oe=613FA4E0"
                            alt="foto de perfil claudio"
                        />
                        <br/>
                        <Text fontSize="2rem">Mi nombre es Claudio Chametla y soy progrador web. </Text>
                    
                    </Box>
                </Center>
        </VStack>
    )

}

export default hero