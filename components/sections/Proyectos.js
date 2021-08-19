import { useMediaQuery, Avatar, List, ListItem, ListIcon,MdCheckCircle,Link,Text, Image, Stack,HStack,StackDivider,VStack,Box, Center, Flex  } from "@chakra-ui/react"
import { ExternalLinkIcon } from '@chakra-ui/icons'

const proyectos = () =>{
  return (
    <Center
    w="80%" flexDir="column"
    >            
      <Text fontSize="6xl" fontFamily="cursive" >Proyectos</Text>
      <Text 
          fontSize="20px" 
      >
        Algunos de mis proyectos estan hosteados en Git Hub y CodePen ademas de mas información de mi perfil laboral se puede encontrar en las siguientes plataformas. 
            <br/>
            Solo da un click para acceder a las diferentes plataformas donde encontraras mas información de mis proyectos, lo cuales incluyen direfentes sitios web y mas.   </Text>
            <br/>
            <br/>
            
            <List spacing={5}>
            
           
                <ListItem fontSize="2rem" fontFamily="cursive"> 
                
                  Mis proyectos:
                </ListItem>
              
                <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                    <Link href="https://github.com/ClaudioChametla" isExternal>
                      Git Hub <ExternalLinkIcon mx="2px" />
                    </Link>  
                  
                </ListItem>
              
                <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />  
                <Link href="https://codepen.io/your-work" isExternal>
                      Code Pen <ExternalLinkIcon mx="2px" />
                </Link>  
                </ListItem>
        
                <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />  
                  <Link href="https://www.linkedin.com/in/claudiochametla/" isExternal>
                      LinkedIn <ExternalLinkIcon mx="2px" />
                  </Link>  
                </ListItem>
            </List>
            
            
              <Image borderRadius="full"
               w="250px" 
               h="auto" 
               src="https://besthqwallpapers.com/Uploads/12-1-2021/151326/thumb2-github-purple-logo-4k-purple-brickwall-github-logo-social-networks.jpg" alt="Imagen Portafolio" />
      
            


        </Center>



    )


}

export default proyectos