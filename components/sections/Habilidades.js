import { List, ListItem, ListIcon,MdCheckCircle,Link,Text, Image,HStack,Box, Center, Flex  } from "@chakra-ui/react"

const habilidades = () => {
  return(
    
    
        <Center w="70%" flexDir="column">
          <Text fontSize="6xl" fontFamily="cursive" >Habilidades</Text>
          <Text fontSize="20px" >Algunos de las habilidades que domino en el entorno de desarrollador web son las siguientes:  </Text>
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
					href="https://www.w3schools.com/css/"
					target="-blank"
					_hover={{ color: "blue.400" }}
				>
					<Image src="https://soydigital.com/wp-content/uploads/2020/05/CSS3.jpg"
						alt="css"
						width="100%"
						height="100%"
						borderRadius="full"
					/>
					CSS 3
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
					href="https://openwebinars.net/blog/que-es-html5/"
					target="-blank"
					_hover={{ color: "orange.400" }}
				>
					<Image src="http://www.w3.org/html/logo/downloads/HTML5_Badge_512.png"
						alt="html"
						width="100%"
						height="100%"
						borderRadius="full"
					/>
					HTML 5
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
					href="https://www.javascript.com/"
					target="-blank"
					_hover={{ color: "yellow.400" }}
				>
					<Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"
						alt="js"
						width="100%"
						height="100%"
						borderRadius="full"
					/>
					JAVASCRIPT
				</Link>
			</Box>

      
	</HStack>          

        





        </Center>
    
  )
}

export default habilidades