import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Habilidades from '../components/sections/Habilidades'
import Footer from '../components/Footer'
import { useMediaQuery, Stack,Box, Flex, Center} from "@chakra-ui/react"

export default function PHabilidades(){
    return(
        <Stack>
            <Center flexDir="column">
                <Hero/>
                <NavBar/>
                <Box h="100px"/>
                <Habilidades/>
                <Box h="100px"/>    
            </Center>
        <Footer/>
        </Stack>
    )
}