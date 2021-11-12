import {Text, Image,Box, Center, Flex} from "@chakra-ui/react"


const bienvenido = () => {

    return (      
    <Flex align="center"
    justify="center" 
    bgImage="" h="600px" w="100%" >
    <Box h="100px"/>
    <Center w="80%" flexDir="column">
    <Text fontSize="6xl" fontFamily="cursive"> Bienvenido </Text>
    <hr/>
    <Text 
    fontSize="20px" 
    fontFamily="sans-serif" 
    >Este en un espacio para mostrar mi portafolio web el cual esta desarrollado en Next JS el cual es un Framework construido sobre React, la libreria de Javascript. 
    <br/>
    Ademas utilizando la libreria de Chakra UI. 
</Text>
<Box h="100px"/>
    <Image 
        borderRadius="full" 
        w="250px" 
        h="auto" 
        src="https://static.vecteezy.com/system/resources/thumbnails/002/100/588/small/folder-of-documents-portfolio-with-files-linear-outline-business-icon-neon-style-light-decoration-icon-bright-electric-symbol-isolated-on-brick-wall-vector.jpg" 
        alt="Imagen Portafolio" />
</Center>
</Flex>
)
}

export default bienvenido