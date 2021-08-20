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
        <Image borderRadius="full"
        w="250px" 
        h="auto" 
        src="https://besthqwallpapers.com/Uploads/12-1-2021/151326/thumb2-github-purple-logo-4k-purple-brickwall-github-logo-social-networks.jpg" alt="Imagen Portafolio" />              
    
        <br/>  

      <HStack
			h="100%"
			w="100%"
		  >

			<Box
        _hover={{ transform: "scale(1.1)" }}
				h="300px"
				w="100"
				textAlign="center"
				fontStyle="cursive"
        fontSize="2rem"
				borderRadius="10%"
        padding="10"
				>
				<Link
					href="https://github.com/ClaudioChametla"
					target="-blank"
					_hover={{ color: "red.400" }}
				>
					<Image src="https://besthqwallpapers.com/Uploads/2-1-2021/150010/thumb2-github-red-logo-4k-red-brickwall-github-logo-social-networks.jpg"
						alt="GitHub"
						width="100%"
						height="100%"
						borderRadius="10%"
					/>
					GitHub
				</Link>
			</Box>

      <Box
        _hover={{ transform: "scale(1.1)" }}
				h="300px"
				w="100"
				textAlign="center"
				fontStyle="cursive"
        fontSize="2rem"
				borderRadius="10%"
        padding="10"
				>
				<Link
					href="https://codepen.io/your-work"
					target="-blank"
					_hover={{ color: "purple.400" }}
				>
					<Image src="https://lh3.googleusercontent.com/proxy/e3r93qwCMoYG24iLLpxtv7v9yn42mBFTI60v42Mw9q8aJWI90gNujOGP1o8PR3_kUv8IiS4BBjffg5UK8cGfqxFLl6_7lwPd5_8Pk93Lg-BPTCV5KB-ig-PUb_JbCg"
						alt="Codepen"
						width="100%"
						height="100%"
						borderRadius="10%"
					/>
					CodePen
				</Link>
			</Box>

      <Box
        _hover={{ transform: "scale(1.1)" }}
				h="300px"
				w="100"
				textAlign="center"
				fontStyle="cursive"
        fontSize="2rem"
				borderRadius="10%"
        padding="10"
				>
				<Link
					href="https://www.linkedin.com/in/claudiochametla/"
					target="-blank"
					_hover={{ color: "blue.400" }}
				>
					<Image src="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw"
						alt="linkedin"
						width="100%"
						height="100%"
						borderRadius="10%"
					/>
					LinkedIn
				</Link>
			</Box>

      
	</HStack>























    </Center>
  )
}
export default proyectos